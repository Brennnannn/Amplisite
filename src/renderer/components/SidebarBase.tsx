import React, { useState } from 'react'

import '../../styles/sidebar.css'
import SidebarPlay from './SidebarPlay'
import SidebarCreate from './SidebarCreate'


export default function SidebarBase() {
  const [sliderValue, setSliderValue] = useState(false)
  return (
    <div className="sidebar">

      <div className="center">
        <div className="btn-container">
          <label className="switch btn-color-mode-switch" htmlFor="color_mode">
            <input type="checkbox" name="color_mode" id="color_mode"
            value={sliderValue ? "0" : "1"} onChange={() => setSliderValue(!sliderValue)} />
            <div data-on="Create" data-off="Play" className="btn-color-mode-switch-inner" />
          </label>
        </div>
      </div>

      {sliderValue ? <SidebarCreate/> : <SidebarPlay/>}

    </div>

)}
