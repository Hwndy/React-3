import Profile from './Profile'
import './ProfileCard.css';
import Img1 from "../assets/Images/image1.jpg"
import Img2 from "../assets/Images/image2.svg"
import Img3 from "../assets/Images/image3.svg"
import Img4 from "../assets/Images/image4.svg"
import Img5 from "../assets/Images/image5.svg"
import Img6 from "../assets/Images/image6.svg"
import './Profile.css'

const ProfileCard = () => {
  
  return (
    <div className="Cards">
      <div className="flex1">
      <Profile Img= {Img1} Name= "Sulaimon Ibrahim" Age= "30" location= "U.S.A" Style= "a"/>  
      <Profile Img= {Img2} Name= "Sulaimon Ibrahim" Age= "40" location= "U.K.A" Style= "b"/>
      <Profile Img= {Img3} Name= "Sulaimon Ibrahim" Age= "50" location= "U.H.A" Style= "c"/>
      </div>
      <hr />
    <div className="flex2">
      <Profile Img= {Img4} Name= "Sulaimon Ibrahim" Age= "60" location= "U.N.A" Style= "d"/>
      <Profile Img= {Img5} Name= "Sulaimon Ibrahim" Age= "70" location= "U.B.A" Style= "e"/>
      <Profile Img= {Img6} Name= "Sulaimon Ibrahim" Age= "80" location= "U.R.A" Style= "f"/>
      
    </div>   
    </div>
  );
};

export default ProfileCard;