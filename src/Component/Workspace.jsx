import Main from "./Main.jsx"
import Top from "./Top.jsx"

// eslint-disable-next-line react/prop-types
export default function Workspace() {
    return( 
    <div className="flex flex-col w-full border-opacity-50 h-screen">
      <div className="grid h-20 card rounded-box place-items-center m-1">
        <Top/>
      </div>
      <div className="grid flex-glow">
        <Main/>
      </div>


    </div>
  )}