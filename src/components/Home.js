import React from 'react';

function Home() {
  return (
    <div>    
        <div className='split-pane col-xs-12 col-sm-6 registration-side'>
         <div>    
            <div className='text-content'>
                <div className="bold">Auto</div>
                <div className='big'>REGISTRATION</div>
            </div>
            <button>
                I want to registrate Car
            </button>
        </div>
        </div>
        <div className='split-pane col-xs-12 col-sm-6 list-side'>
        <div>    
            <div className='text-content'>
            <div className="bold">See</div>
            <div className='big'>All registrated Auto's</div>
            </div>
            <a className='button'>
            Show me list
            </a>
        </div>
        </div>
    </div>
        
  );
}

export default Home;