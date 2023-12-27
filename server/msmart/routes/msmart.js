const express = require('express');
const app = express();
const router = express.Router();
const { msmart_team, msmartleads, users, msmart_teamManager, msmart_merit, msmart_connectActivity, msmart_resultActivity, msmart_broadcast, msmart_prospectingActivity} = require('../models');
const nodemailer = require('nodemailer');
const { validateToken } = require('../middlewares/AuthMiddleware');
const { Op, where } = require('sequelize');


//TEAM

router.get('/', validateToken, async (req,res) => {
  res.json({msg: 'hola'})
})

router.get('/leads/all/:teamName', validateToken, async (req,res) => {
  try{
  const username = req.user.username;
  const teamName = req.params.teamName;
  const listOfLeads = await msmartleads.findAll({where: {username:username, teamName: teamName}});

    res.status(201).json(listOfLeads);

  }catch(error){
    res.status(404).json({error:"Unable to access to database"})
    console.log(error)
  }
  

})

router.get('/lead/:id', validateToken, async (req,res) => {
  try{
  const lid = req.params.id;
  const username = req.user.username;
  const singleLead = await msmartleads.findOne({where: {username:username, id:lid}});
    res.status(201).json({db: singleLead});
  }catch(error){
    res.status(404).json({error:"Unable to access to database"})
    console.log(error)
  }
  

})

router.get('/get/team/data/:teamName', validateToken, async (req,res) => {
const username = req.user.username;
const teamName = req.params.teamName;
let uploadDB = [];
let uploadDBarr = [];
let presentation = 0;
let followup = 0;
let prospecting = 0;
let presentationarr = [];
let followuparr = [];
let prospectingarr = [];

let addfb = 0;
let followtt = 0;
let savenum = 0;
let connect = 0;
let addfbarr = [];
let followttarr = [];
let savenumarr = [];
let connectarr = [];

let engfb = 0;
let engtt= 0;
let engws= 0;
let eng =0;
let engfbarr = [];
let engttarr= [];
let engwsarr= [];
let engarr = [];

let close = 0;
let book = 0;
let reject = 0;
let result = 0;
let closearr = [];
let bookarr = [];
let rejectarr = [];
let resultarr = [];

let members = [];

const getGroup = await msmart_teamManager.findOne({where:{username:username}});
const managerName = await getGroup.managerName;
const getMembers = await msmart_teamManager.findAll({where: {teamName: teamName, managerName: managerName, position:"Member"}, attributes:['username']});

getMembers.forEach(async(item) => {
  const users = item.dataValues.username;
  if(members.push(users)){
  }
})

for(var i = 0; i<members.length; i++){
  const member = members[i];

  let dbcount = 0;
  const getDB = await msmartleads.findAll({where: {username:member}});
  if(getDB){
    dbcount = await getDB.length
  }
  if(uploadDBarr.push(dbcount)){
  }

  let followupcount = 0;
  let presentcount = 0;
  const getfupres = await msmart_prospectingActivity.findOne({where:{username: member, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}});
  if(getfupres){
    followupcount = await getfupres.followup;
    presentcount = await getfupres.presentation;
  }
  if(followuparr.push(followupcount)){}
  if(presentationarr.push(presentcount)){}

  let prospectingcount = 0;
}

for(var i=0; i<uploadDBarr.length; i++){
  uploadDB += uploadDBarr[i];
}

for(var i=0; i<followuparr.length; i++){
  followup += followuparr[i];
}

for(var i=0; i<presentationarr.length; i++){
  presentation += presentationarr[i];
}

res.json({uploadDB: uploadDB, followup: followup, presentation: presentation})
})

router.get('/test', validateToken, async (req,res) => {
  try{
    const username = 'shahrul'
    const teamName = 'TEST'
    const getMerit = await msmart_merit.findOne({where:{ username: username, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}});
    res.status(201).json(getMerit);
  }catch(error){
    res.json({error:"Unable to access to database"})
    console.log(error)
  }
  

})

router.put('/lead/:teamName/:id', validateToken, async (req,res) => {
  try{
    const username = req.user.username;
    const id = req.params.id;
    const teamName = req.params.teamName;
    let prospectingMerits = 0;
    let connectingMerits = 0;
    let engagementMerits = 0;
    let resultMerits = 0;
    let presentMerit = 0;
    let followupMerit = 0;
    let addFBMerit = 0;
    let followTTMerit = 0;
    let savePhoneMerit = 0;
    let closeMerit = 0;
    let bookMerit = 0;
    let rejectMerit = 0;
    let currProspecting
    let currConnect
    let currEngagement
    let currResult
    let currPresent
    let currFollowup
    let currAddFB
    let currFollowTT
    let currSaveNumber
    let currClose
    let currBook
    let currReject
    

    const dateNow = new Date(Date.now());
  
    const {leadName, leadPhoneNumber, leadTag, leadSource, leadStatus, prospectingRemark, leadPresent, presentRemark, addFB, followTT, savePhone, engFB, engTT, engWS, closingStatus, rejectionType, rejectionRemark, followUpDate, followUpRemark} = req.body;
    const lead = await msmartleads.findOne({where: {id: id}});

    const getMerit = await msmart_merit.findOne({where:{ username: username, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}});
    if(getMerit){
     currProspecting = await getMerit.prospecting;
     currConnect = await getMerit.connect;
     currEngagement = await getMerit.engagement;
     currResult = await getMerit.result;
    }
    

    const getProspectAct = await msmart_prospectingActivity.findOne({where: {username: username, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}});
    if(getProspectAct){
    currPresent = await getProspectAct.presentation;
    currFollowup = await getProspectAct.followup;
    }

    const getConnectAct = await msmart_connectActivity.findOne({where: {username: username, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}});
    if(getConnectAct){
    currAddFB = await getConnectAct.addFB;
    currFollowTT = await getConnectAct.followTT;
    currSaveNumber = await getConnectAct.saveNumber;
    }
    

    const getResultAct = await msmart_resultActivity.findOne({where: {username: username, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}});
    if(getResultAct){
      currClose = await getResultAct.close;
      currBook = await getResultAct.book;
      currReject = await getResultAct.reject;
    }
  
    const iPresent = await lead.leadPresent
    const iAddFB = await lead.con_addFB
    const iFollowTT = await lead.con_followTT
    const iSavePhone = await lead.con_savePhone
    const iEngFB = await lead.eng_facebook
    const iEngTT = await lead.eng_tiktok
    const iEngWS = await lead.eng_wsStatus
    const iClosingStatus = await lead.closingStatus
    const iRejectType = await lead.rejectionType
    const iFollowUpdate = await lead.followUpDate
  
    if(iPresent !== leadPresent){
      prospectingMerits ++
      presentMerit ++
    }
    if(iFollowUpdate !== followUpDate){
      prospectingMerits ++
      followupMerit ++
    }
    if(iAddFB !== addFB){
      connectingMerits ++
      addFBMerit ++
    }
    if(iFollowTT !== followTT){
      connectingMerits ++
      followTTMerit ++
    }
    if(iSavePhone !== savePhone){
      connectingMerits ++
      savePhoneMerit ++
    }
    if(iEngFB !== engFB){
      engagementMerits ++
    }
    if(iEngTT !== engTT){
      engagementMerits ++
    }
    if(iEngWS !== engWS){
      engagementMerits ++
    }
    if(iClosingStatus !== closingStatus){
      resultMerits ++
      if(closingStatus == 'CLOOOOOSED!🥳'){
        closeMerit ++
      }else if(closingStatus == 'Booked'){
        bookMerit ++
      }else if (closingStatus == 'Rejected'){
        rejectMerit ++
      }
    }
    if(iRejectType !== rejectionType){
      resultMerits ++
    }

    await msmartleads.update({leadName: leadName, leadPhoneNumber: leadPhoneNumber, leadTag: leadTag, leadSource: leadSource, leadStatus: leadStatus, prospectingRemark: prospectingRemark, leadPresent: leadPresent, presentRemark: presentRemark, con_addFB: addFB, con_followTT: followTT, con_savePhone: savePhone, eng_facebook: engFB, eng_tiktok: engTT, eng_wsStatus: engWS, closingStatus: closingStatus, rejectionType: rejectionType, rejectionRemark: rejectionRemark, followUpDate: followUpDate, followUpRemark: followUpRemark, lastUpdate: dateNow}, {where:{id:id}}).then(async () => {
        if(!getMerit){
          await msmart_merit.create({
            username:username,
            teamName:teamName,
            prospecting: prospectingMerits,
            connect: connectingMerits,
            engagement: engagementMerits,
            result: resultMerits,
            day: process.env.DAY, 
            week: process.env.WEEK, 
            month: process.env.MONTH, 
            year: process.env.YEAR
          })
        }else{
          await msmart_merit.update({
            prospecting: currProspecting + prospectingMerits,
            connect: currConnect + connectingMerits,
            engagement: currEngagement + engagementMerits,
            result: currResult + resultMerits
          }, {where: {username: username, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}})
        }

      if(!getProspectAct){
        await msmart_prospectingActivity.create({
          username:username,
            teamName:teamName,
            presentation: presentMerit,
            followup: followupMerit,
            day: process.env.DAY, 
            week: process.env.WEEK, 
            month: process.env.MONTH, 
            year: process.env.YEAR
        })
      }else{
        await msmart_prospectingActivity.update({
          presentation: currPresent + presentMerit,
            followup: currFollowup + followupMerit,
        }, {where: {username: username, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}});
      }

      if(!getConnectAct){
        await msmart_connectActivity.create({
            username:username,
            teamName:teamName,
            addFB: addFBMerit,
            followTT: followTTMerit,
            saveNumber: savePhoneMerit,
            day: process.env.DAY, 
            week: process.env.WEEK, 
            month: process.env.MONTH, 
            year: process.env.YEAR
        })
      }else{
        await msmart_connectActivity.update({
            addFB: currAddFB + addFBMerit,
            followTT: currFollowTT + followTTMerit,
            saveNumber: currSaveNumber + savePhoneMerit,
        }, {where: {username: username, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}})
      }

      if(!getResultAct){
        await msmart_resultActivity.create({
            username:username,
            teamName:teamName,
            close: closeMerit,
            book: bookMerit,
            reject: rejectMerit,
            day: process.env.DAY, 
            week: process.env.WEEK, 
            month: process.env.MONTH, 
            year: process.env.YEAR
        })
      }else{
        await msmart_resultActivity.update({
           close: currClose + closeMerit,
            book: currBook + bookMerit,
            reject: currReject + rejectMerit,
        }, {where: {username: username, teamName:teamName, day: process.env.DAY, week: process.env.WEEK, month: process.env.MONTH, year: process.env.YEAR}})
      }

    }).then(() => {
      res.json({succMsg:"Lead updated successfully"})
    })
    
    

  }catch(error){
    res.json({error:"Cant update database. Please try again"})
    console.log(error)
  }
})

router.post('/lead', validateToken, async (req,res) => {
  const username = req.user.username;
  const {leadName, leadPhoneNumber, leadSource} = req.body;
  try{
    await msmartleads.create({
      username: username,
      leadName: leadName,
      leadPhoneNumber: leadPhoneNumber,
      leadSource: leadSource,
      leadStatus: 'No Action',
      leadPresent: 0,

    }).then(() => {
      res.status(201).json({status:'Contact saved successfully'})
    })

  }catch(err){
    res.status(404).json({error:"Unable to save contact"})
    console.log(err)
  }
})

router.get('/get/team/all', validateToken, async (req,res) => {
  try{
  const username = req.user.username;
  const getTeam = await msmart_team.findAll({where: {username: username}});
  const getManager = await msmart_teamManager.findAll({where:{username:username, position: "Manager", isVerified:1}});
  const getMember = await msmart_teamManager.findAll({where: {username: username, position: "Member", isVerified: 1}});
  res.json({owner: getTeam, manager: getManager, member: getMember})
  }catch(error){
  res.json({error:"Failed to retrieve teams."})
  }
  
});

router.get('/get/team/list', validateToken, async (req,res) => {
  try{
  const getTeam = await msmart_team.findAll();
  res.json(getTeam)
  }catch(error){
  res.json({error:"Failed to retrieve teams."})
  }
  
})

router.get('/get/manager/list/:teamName', validateToken, async (req,res) => {
  try{const team = req.params.teamName;
  const managers = await msmart_teamManager.findAll({where: {teamName: team, position: 'Manager', isVerified: 1}})
  res.json(managers)
}
  catch(error){
    res.json({error: "Failed to retrieve managers."})
  }
})

router.get('/get/data/member/:teamName', validateToken, async (req,res) =>{
  try{
    const username = req.user.username;
    const teamName = req.params.teamName;
    let isBroadcast;
    let uploadedDB;
    let pendingPresentation;
    let prospectingMerits;
    let connectMerits;
    let engagementMerits;
    let resultMerits;
    let addFB;
    let followTT;
    let saveNumber;
    let pendingFB;
    let pendingTT;
    let pendingWS;
    let close;
    let book;
    let reject;

    const getTeam = await msmart_team.findOne({where: {username: username, teamName:teamName}});
    const getLeads = await msmartleads.findAll({where: {username: username, teamName:teamName}});
    const getPending = await msmartleads.findAll({where:{username:username, teamName:teamName, leadStatus: "Prospecting", leadPresent: 0}});
    const broadcast = await msmart_broadcast.findOne({where: {username:username, teamName:teamName}}).then((response) => {
      if(response === 1){
        isBroadcast = "Done";
      }else{
        isBroadcast = "Pending";
      }
    })
    const merits = await msmart_merit.findOne({where:{username:username, week:process.env.WEEK, month:process.env.MONTH, year:process.env.YEAR}});
    const connectActivities = await msmart_connectActivity.findOne({where: {username:username, week:process.env.WEEK, month:process.env.MONTH, year:process.env.YEAR}});
    const getPendingFB = await msmartleads.findAll({where: {username:username, teamName:teamName, eng_facebook: 0}});
    const getPendingTT = await msmartleads.findAll({where: {username:username, teamName:teamName, eng_tiktok: 0}});
    const getPendingWS = await msmartleads.findAll({where: {username:username, teamName:teamName, eng_wsStatus: 0}});
    const closeActivities = await msmart_resultActivity.findOne({where: {username:username, week:process.env.WEEK, month:process.env.MONTH, year:process.env.YEAR}});
    
    if(!getLeads){
       uploadedDB = 0
    }else{
       uploadedDB = getLeads.length;
    }
    if(!getPending){
       pendingPresentation = 0
    }else{
       pendingPresentation = getPending.length;
    }
    if(!merits){
       prospectingMerits = 0
       connectMerits = 0
       engagementMerits = 0
       resultMerits = 0
    }else{
       prospectingMerits = await merits.prospecting;
       connectMerits = await merits.connect;
       engagementMerits = await merits.engagement;
       resultMerits = await merits.result;
    }
    if(!connectActivities){
     addFB = 0
     followTT = 0
     saveNumber = 0
    }else{
     addFB = await connectActivities.addFB;
     followTT = await connectActivities.followTT;
     saveNumber = await connectActivities.saveNumber;
    }
    if(!getPendingFB){
       pendingFB = 0
    }else{
       pendingFB = getPendingFB.length;
    }
    if(!getPendingTT){
       pendingTT = 0
    }else{
       pendingTT = getPendingTT.length;
    }
    if(!getPendingWS){
       pendingWS = 0
    }else{
       pendingWS = getPendingWS.length;
    }
    if(!closeActivities){
       close = 0
       book = 0
       reject = 0
    }else{
       close = await closeActivities.close;
       book = await closeActivities.book;
       reject = await closeActivities.reject;
    }
    
    res.json({isBroadcast: isBroadcast, uploadedDB: uploadedDB, pendingPresentation: pendingPresentation, prospectingMerits: prospectingMerits, connectMerits: connectMerits, engagementMerits: engagementMerits, resultMerits: resultMerits, addFB: addFB, followTT: followTT, saveNumber: saveNumber, pendingFB: pendingFB, pendingTT: pendingTT, pendingWS: pendingWS, close: close, book: book, reject: reject})

  }catch(error){
    console.log(error)
    return res.json({error: error});
  }
  

})

router.get('/get/data/member/chart/:teamName', validateToken, async (req,res) => {
  try{
  const username = req.user.username;
  const teamName = req.params.teamName;
  const merits = await msmart_merit.findAll({where:{username:username, teamName:teamName}, limit:30});

  res.json({merits: merits})
  
  }catch(error){
  res.json({error:error})
  }
  
});

router.post('/create/db', validateToken, async(req,res) => {
  const username = req.user.username;
  const {teamName, leadPhoneNumber} = req.body;
  await msmartleads.create({
    username: username,
    teamName: teamName,
    leadPhoneNumber:leadPhoneNumber
  }).then(() => {
    res.json({success: 'success'})
  })
})

router.post('/join/team',validateToken, async (req,res) => {
  try{
    const username = req.user.username;
    const {managerName, yourName, teamName} = req.body;
    const checkTeam = await msmart_team.findOne({where: {teamName:teamName}});
    const checkManager = await msmart_teamManager.findOne({where: {teamName:teamName, managerName:managerName}});
    const checkData = await msmart_teamManager.findOne({where: {username:username, teamName:teamName, managerName:managerName}});
    const getManagerUname = await msmart_teamManager.findOne({where: {teamName:teamName, managerName:managerName, position:'Manager'}});
    const ManagerUname = await getManagerUname.username;
    if(!checkTeam){
      return res.json({error: "Selected team does not exist"})
    }
    else if(!checkManager){
      return res.json({error: "Selected manager does not exist"})
    }
    else if(checkTeam && !teamName){
     return res.json({error: "Please select a team"});
    }
    else if(teamName === 'Select Team..' || !teamName){
      return res.json({error: "Please select a team"});
    }
    else if(!managerName || managerName === 'Select Manager..'){
      return res.json({error: "Please select a manager"});
    }
    else if(!yourName){
      return res.json({error: "Your name cannot be blank"});
    }
    else if(checkData){
      return res.json({error: "You already submitted application to this team and manager."});
    }
    else{
      await msmart_teamManager.create({
        username: username,
        nameInTeam: yourName,
        teamName: teamName,
        managerName: managerName,
        managerUsername: ManagerUname,
        position: 'Member',
        isVerified: 0
      }).then(() => {
        return res.json({succMsg: `Your application to join ${teamName} under ${managerName} recorded successfully`});
      }).catch((error) => {
        return res.json({error: 'Unable to join team. Please try again.'});
      });
    }
    

  }catch(error){
    console.log(error)
    return res.json({error: 'Unable to join team as Manager. Please try again.'});
  }

})

router.post('/join/manager', validateToken, async (req,res) => {
  try{
    const username = req.user.username;
    const {managerName, yourName, teamName} = req.body;
    const checkTeam = await msmart_team.findOne({where: {teamName:teamName}});
    const checkName = await msmart_teamManager.findOne({where: {teamName:teamName, managerName:managerName}});
    const checkData = await msmart_teamManager.findOne({where: {username:username, teamName:teamName}});
    if(checkTeam && !teamName){
     return res.json({error: "Please select a team"});
    }else if(!managerName){
      return res.json({error: "Group name cannot be blank"});
    }else if(!yourName){
      return res.json({error: "Your name cannot be blank"});
    }else if(checkName){
      return res.json({error: "Group already exist in this team"});
    }else if(checkData){
      return res.json({error: "You already submitted manager application to this team"});
    }
    else{
      await msmart_teamManager.create({
        username: username,
        nameInTeam: yourName,
        teamName: teamName,
        managerName: managerName,
        managerUsername: username,
        position: 'Manager',
        isVerified: 0
      }).then(() => {
        return res.json({succMsg: 'Successfully join team as Manager'});
      }).catch((error) => {
        return res.json({error: 'Unable to join team as Manager. Please try again.'});
      });
    }
    

  }catch(error){
    console.log(error)
    return res.json({error: 'Unable to join team as Manager. Please try again.'});
  }


})

router.post('/create/team', validateToken, async (req,res) => {
  try{
    const username = req.user.username;
    const {teamName, yourName} = req.body;
    const checkTeam = await msmart_team.findOne({where: {teamName:teamName}});
    if(checkTeam){
      return res.json({error: "Team with this name already existed"})
    }else{
      await msmart_team.create({
        username: username,
        teamName: teamName
      }).then( async () => {
        await msmart_teamManager.create({
          username: username,
          nameInTeam: yourName,
          teamName: teamName,
          managerName: username,
          managerUsername: username,
          position: 'Owner',
          isVerified: 1
        }).then(()=> {
          res.json({succMsg: 'Team created successfully!'});
        }).catch((error) => {
          console.log(error)
          res.json({error:'Unable to create team. Please try again'});
        })
      }).catch((error) => {
        console.log(error);
        res.json({error:'Unable to create team. Please try again'});
      })
    }
  }catch(error){
    res.json({error: 'Unable to create team. Please try again'});
    console.log(error);
  }
})





module.exports = router;