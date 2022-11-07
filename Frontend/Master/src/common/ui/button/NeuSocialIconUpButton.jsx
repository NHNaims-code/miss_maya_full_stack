import React from 'react'
import './style.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaDribbble, FaPinterestP, FaYoutube } from "react-icons/fa";
import { RiInstagramFill, RiPinterestFill } from "react-icons/ri";

export default function NeuSocialIconUpButton({icon="facebook"}) {

  


    return(
      <div className='neu_social_icon_up_button__root'>
        <div className="neu_social_icon_up_button__container cursor-pointer">
          { icon == 'facebook' && <FaFacebookF size={16}/> }
          { icon == 'instagram' && <RiInstagramFill size={16}/> }
          { icon == 'twitter' && <FaTwitter size={16}/> }
          { icon == 'linkedIn' && <FaLinkedinIn size={16}/> }
          { icon == 'dribbble' && <FaDribbble size={16}/> }
          { icon == 'pinterest' && <RiPinterestFill size={16}/> }
          { icon == 'youtube' && <FaYoutube size={16}/> }
        </div>
      </div>
    )


}
