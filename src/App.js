import Login from './components/loginPage/Login';
import './App.css';
import Register from './components/loginPage/Register';   
import Mainlanding from './components/landingpage/Mainlanding';
import MainBlogPage from './components/BlogPage/MainBlogPage';
import MainMembership from './components/MembershipPage/MainMembership';
import MainCoursePage from './components/CoursePage/MainCoursePage';
import MainCourseDetail from './components/CourseDetail/MainCourseDetail';
import MainCheckOutPage from './components/CheckOutPage/MainCheckOutPage';
import MainBlogDetail from './components/BlogDetail/MainBlogDetail';
import MainCourseCalender1 from './components/CourseCalender1/MainCourseCalender1';
import MainMeetingPage from './components/Meeting/MainMeetingPage';
import MainLiterature from './components/Literature/MainLiterature';
import MainSearch from './components/Search/MainSearch'
import { Route , Routes} from 'react-router-dom';
import CourseCalender from './components/CourseCalender/CourseCalender';
import CourseCalender1 from './components/CourseCalender1/CourseCalender1';
import CourseCalender2 from './components/CourseCalender2/CourseCalender2';
import CourseFullView from './components/CourseFullView/CourseFullView';
import Error from './Error';

function App() {
  
  return ( 
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Mainlanding/>} />
        <Route path='/login'  element={<Login/>}/>
        <Route path='/register'  element={<Register/>}/>
        <Route path='/blog'  element={<MainBlogPage/>}/>
        <Route path='/membership'  element={<MainMembership/>}/>
        <Route path='/course'  element={<MainCoursePage/>}/>
        <Route path='/coursedetail'  element={<MainCourseDetail/>}/>
        <Route path='/checkout'  element={<MainCheckOutPage/>}/>
        <Route path='/blogdetail'  element={<MainBlogDetail/>}/>
        <Route path='/coursecalender'  element={<CourseCalender/>}/>
        <Route path='/coursecalender1'  element={<CourseCalender1/>}/>
        <Route path='/coursecalender2'  element={<CourseCalender2/>}/>
        <Route path='/coursefullview'  element={<CourseFullView/>}/>
        <Route path='/meeting'  element={<MainMeetingPage/>}/>
        <Route path='/literature'  element={<MainLiterature/>}/>
        <Route path='/search'  element={<MainSearch/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;


