import React from 'react';
import Profilesnapshot from './profileSnapshot';

function App() {
    return(
        <div className='leadingImpressionsHomepageLeaderboard '>
            <div className='leadingImpressionsTag'>
                <div className='leadingImpressionsTag1'>
                    <p>Leading</p>
                </div>
                <div className='leadingImpressionsTag2'>
                    <p>Impressions</p>
                </div>
            </div>
            <div>
                <div>
                    <Profilesnapshot />
                </div>
                <div>
                    <Profilesnapshot />
                </div>
                <div>
                    <Profilesnapshot />
                </div>
            </div>
        </div>
    );
}

export default App;