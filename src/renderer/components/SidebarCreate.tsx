

export default function SidebarCreate() {
  return (
    <>
      <ul style={{marginTop: '70px'}}>
          <h3>listen</h3>
          <div className="dropdown">
            <span className="listen">Input Device</span>
            <button type="button" className="drop-button">input device</button>
            <div className="dropdown-content">
              <span>default microphone</span>
              <span>Behringer x32</span>
              <span>Focusrite Scarlett 2i2</span>
            </div>
          </div>

          <div className="dropdown">
            <span className="listen">Output Device</span>
            <button type="button" className="drop-button">output device</button>
            <div className="dropdown-content">
              <span>default microphone</span>
              <span>Behringer x32</span>
              <span>Focusrite Scarlett 2i2</span>
            </div>
          </div>

          <button type="button" className="generate">
            generate
          </button>
      </ul>

      <ul style={{borderColor: 'rgba(0,0,0,0)', marginTop: '0px'}}>
        <h3>describe</h3>
        <div className="dropdown">
          <input type="text" placeholder="name" className="drop-button" />
        </div>
      </ul>
    </>
)}
