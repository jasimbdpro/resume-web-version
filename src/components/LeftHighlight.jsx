import React from 'react';
const LeftHighlight = () => {
    return (
        <div className=' left-highlight'>
            <img className='owner-profile' src="profile.jpg" alt="" />
            <div className='white-box'><h4>CONTACTS</h4></div>
            <div className='white-box-details'>
                <a href="">
                    <p>+8801827104738</p>
                </a>
                <a href="">
                    <p>
                        jasimbdpro@gmail.com
                    </p>
                </a>
                <a href="">
                    <p>
                        Hossen Shaheed Suhrawardy Hall
                        (RU), Motihar, Rajshahi
                    </p>
                </a>
                <a href="">
                    <p>facebook.com/jasimsdream
                    </p>
                </a>
                <a href="">
                    <p>
                        behance.net/jasimbdpro
                    </p>
                </a>
                <a href="">
                    <p>
                    </p>
                </a>
            </div>
            <div className='white-box'><h4>SKILLS (TECHNICAL)</h4></div>
            <ul className='white-box-details'>
                <li>Graphic Design, Basic Web Dev,
                    Short-Promo Video, Social Media
                    Marketing, Advertising.
                </li>
                <li>ReactJS, JAVASCRIPT, CSS, HTML
                </li>
                <li>Microsoft Excel, PowerPoint, Word,
                    Outlook, and Publishers</li>
                <li>Google Sheet, Slide, Docs, Form,
                    Mail-Merge</li>
                <li>ChatGpt-4, Eleven Labs AI Tools,
                    Dall-E-3, Mid-Journey etc AI tools
                </li>
                <li>Photoshop, Illustrator, Canva, CapCut,
                    After Effects, InDesign</li>
            </ul>
            <div className='white-box'><h4>LANGUAGE</h4></div>
            <ul className='white-box-details'>
                <li>Bangla-Native
                </li>
                <li>English-Fluent
                </li>
            </ul>
            <div className='white-box'><h4>HOBBIES</h4></div>
            <ul className='white-box-details'>
                <li>Freehand Exercising
                </li>
                <li>Learning Tech Knowledge
                </li>
                <li>Walking and cycling</li>
            </ul>
        </div>
    );
};
export default LeftHighlight;