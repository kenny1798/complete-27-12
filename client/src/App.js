//Packages import
import React, {useState, useEffect} from 'react';
import {useLocation, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useValidContext } from './hooks/useValidContext';
import { useAdminContext } from './hooks/useAdminContext';


//Server
import Home from './pages/Home';
import Login from './pages/Login';
import AccAuth from './pages/AccAuth';
import Signup from './pages/Signup';
import Courses from './pages/Courses';
import Tools from './pages/Tools';
import Autocopy from './pages/Autocopy';
import Changepass from './pages/Changepass';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import WhatsappAuth from './pages/WhatsappAuth';

//Admin
import AdminLogin from './pages/admin/AdminLogin';
import AdminPanel from './pages/admin/AdminPanel';
import AdminWsAuth from './pages/admin/AdminWsAuth';
import AdminUserList from './pages/admin/AdminUserList';
import AdminEditUser from './pages/admin/AdminEditUser';

//Mgen
import Mgen from './pages/mgen/Mgen';
import Mgenform from './pages/mgen/Mgenform';
import MgenCreateForm from './pages/mgen/MgenCreateForm';
import MgenSForm from './pages/mgen/MgenSForm';
import MgenContacts from './pages/mgen/MgenContacts';

//Msmart
import Msmart from './pages/msmart/Msmart';
import JoinTeam from './pages/msmart/JoinTeam';
import Dashboard from './pages/msmart/Dashboard';
import ManageLeads from './pages/msmart/ManageLeads';
import CreateLead from './pages/msmart/CreateLead';
import SingleLeads from './pages/msmart/SingleLeads';
import JoinAsManager from './pages/msmart/manage/JoinAsManager';


import ManagerDashboard from './pages/msmart/manage/ManagerDashboard';
import ManageTeam from './pages/msmart/manage/ManageTeam';
import SingleTeam from './pages/msmart/manage/SingleTeam';

import CreateTeam from './pages/msmart/manage/supermanager/CreateTeam';

//MBot
import Mbot from './pages/mbot/Mbot';
import MbotAuth from './pages/mbot/MbotAuth';
import MbotFlow from './pages/mbot/MbotFlow';
import MbotCampaign from './pages/mbot/MbotCampaign';
import MbotCreateBlock from './pages/mbot/MbotCreateBlock';
import MbotCreateFlow from './pages/mbot/MbotCreateFlow';
import MbotCreateCampaign from './pages/mbot/MbotCreateCampaign';



function App() {

  const { user } = useAuthContext();
  const { valid } = useValidContext();
  const { admin } = useAdminContext();
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  

  return (
    <div className='app-content'>
      {showNav ? <Navbar /> : null}
        <Routes>

          <Route path='/' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <Home />}/>
          
          <Route path='*' element={<NotFound setNavbar={setShowNav} />} />

          <Route path='/login' element={user ? <Navigate to="/" state={{from: location}} replace /> : <Login/>  } />

          <Route path='/signup' element={user ? <Navigate to="/" state={{from: location}} replace /> : <Signup/> } />

          <Route path='/auth' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && valid ? <Navigate to="/" state={{from: location}} replace /> : user && !valid && <AccAuth/> } />

          <Route path='/courses' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <Courses />} />

          <Route path='/tools' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <Tools />} />

          <Route path='/mace' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <Autocopy />} />

          <Route path='/change-password' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <Changepass />} />

          <Route path='/whatsapp/auth' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <WhatsappAuth />} />



          <Route path='/mgen/:session_client' element={<Mgenform title=":session_client" setNavbar={setShowNav} />} />

          <Route path='/mgenform' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <Mgen />} />

          <Route path='/mgenform/contacts' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <MgenContacts />} />

          <Route path='/mgenform/createform' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <MgenCreateForm />} />

          <Route path='/mgenform/form/:session_client' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <MgenSForm />} />


          {/*<Route path='/msmart' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <Msmart />} />

          <Route path='/msmart/team/join' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <JoinTeam />} />

          <Route path='/msmart/dashboard/:teamName' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <Dashboard />} />

          <Route path='/msmart/db/create/:teamName' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <CreateLead />} />

          <Route path='/msmart/db/manage/:teamName' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <ManageLeads />} />
          
          <Route path='/msmart/db/manage/:teamName/:id' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <SingleLeads />} />

          <Route path='/msmart/team/join/manager' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <JoinAsManager />} />

          <Route path='/msmart/team/create' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <CreateTeam />} />

          <Route path='/msmart/team/dashboard/:teamName' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <ManagerDashboard />} />

          <Route path='/msmart/team/manage/:teamName' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <ManageTeam />} />

          <Route path='/msmart/team/manage/:teamName/:username' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <SingleTeam />} /> */}



          <Route path='/mbot' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <Mbot />}/>

          <Route path='/mbot/auth' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <MbotAuth />}/>

          <Route path='/mbot/flow' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <MbotFlow />}/>

          <Route path='/mbot/campaign' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <MbotCampaign />}/>

          <Route path='/mbot/:id' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <MbotCreateBlock />}/>

          <Route path='/mbot/create/flow' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <MbotCreateFlow />}/>

          <Route path='/mbot/create/campaign' element={!user ? <Navigate to="/login" state={{from: location}} replace /> : user && !valid ? <Navigate to="/auth" state={{from: location}} replace /> : user && valid && <MbotCreateCampaign />}/>



          <Route path='/admin/login' element={admin ? <Navigate to="/admin/" state={{from: location}} replace /> : <AdminLogin setNavbar={setShowNav} />} />

          <Route path='/admin/' element={!admin ? <Navigate to="/admin/login" state={{from: location}} replace /> : <AdminPanel setNavbar={setShowNav} />}  />

          <Route path='/admin/wsauth' element={!admin ? <Navigate to="/admin/login" state={{from: location}} replace /> : <AdminWsAuth setNavbar={setShowNav} />} />
          
          <Route path='/admin/users' element={!admin ? <Navigate to="/admin/login" state={{from: location}} replace /> : <AdminUserList setNavbar={setShowNav} />} />

          <Route path='/admin/users/edit/:user' element={!admin ? <Navigate to="/admin/login" state={{from: location}} replace /> : <AdminEditUser setNavbar={setShowNav} />} />

        </Routes>
      
        </div>
      
  );
}

export default App;
