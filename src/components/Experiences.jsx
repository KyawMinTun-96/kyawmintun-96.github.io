

function Experiences() {
    return(
        <section id="experience" className="my-skill" data-aos="fade-up">
        <h2 className="sec-title">Experiences</h2>

        <div className="skill-sec">
            <div className="skill-tab">
                <button type="button" className="tab-btn highlight" data-id="tabEdu">
                    <span>Education</span>
                </button>
                <button type="button" className="tab-btn" data-id="tabDev">
                    <span>Development</span>
                </button>
                <button type="button" className="tab-btn" data-id="tabExp">
                    <span>Experiences</span>
                </button>
                <button type="button" className="tab-btn" data-id="tabSkl">
                    <span>Skills</span>
                </button>
                <button type="button" className="tab-btn" data-id="tabTol">
                    <span>Tools</span>
                </button>
            </div>

            <div className="tabSkill description tabSkill-active" data-id="tabEdu">
                <h3>Education</h3>
                <ul>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.1s'}}>
                        Technological University (Mawlamyine)
                        <p className="dev_year"><small>December 2014 - September 2020, (Completed)</small></p>
                        <p>Bachelor of Engineering (Information Technology)</p>
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.3s'}}>
                        Basic Education High School (Daik-U)
                        <p className="dev_year"><small>June 2014</small></p>
                        <p>Matriculation Exam (Completed)</p>
                    </li>
                </ul>
            </div>

            <div className="tabSkill description" data-id="tabDev">
                <h3 className="skill_title">Development</h3>
                <ul>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.3s'}}>
                        Udemy
                        <p className="dev_year"><small>August 2023 - September 2023, (Online)</small></p>
                        <p>AWS Solutions Architect Associate Course</p>
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.3s'}}>
                        Aquarius Tech Myanmar
                        <p className="dev_year"><small>Oct 2019 - Dec 2019, (Yangon)</small></p>
                        <p>Web Design Course</p>
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.7s'}}>
                        NANO TECH Computer Training Center
                        <p className="dev_year"><small>Feb 2017 - Jun 2017, (Mawlamyine)</small></p>
                        <p>Java Programming Course</p>
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1s'}}>
                        NANO TECH Computer Training & Maintenance, Repairing Center
                        <p className="dev_year"><small>Oct 2015 - Nov 2015, (Mawlamyine)</small></p>
                        <p>A+ Course</p>
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.2s'}}>
                        Easyway Thai Language Center II
                        <p className="dev_year"><small>April 2024 - May 2024, (Online)</small></p>
                        <p>Basic Thai Speaking Course</p>
                    </li>
                </ul>
            </div>

            <div className="tabSkill description" data-id="tabExp">
                <h3 className="skill_title">Experiences</h3>
                <ul>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.1s'}}>
                        Spiceworks Myanmar Co.,Ltd
                        <p className="dev_year"><small>July 2020 - August 2020, <span style={{display: 'inline', color: '#939393'}}></span></small></p>
                        {/* <p>Intern Position</p> */}
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.5s'}}>
                        Galaxy Software Co.,Ltd
                        <p className="dev_year">
                            <small>November 2021 - January 2023, 
                                {/* (<span id="galaxy_exp" style="display: inline; color: #939393;"></span>) */}
                            </small>
                        </p>
                        {/* <p>Software Support Technician Position</p> */}
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.7s'}}>
                        NEX4 ICT Solutions Co.,Ltd
                        <p className="dev_year">
                            <small>March 2023 - April 2024, 
                            {/* (<span id="nex4_exp" style="display: inline; color: #939393;"></span>) */}
                            </small>
                        </p>
                        {/* <p>Microsoft System/Cloud Engineer Position</p> */}
                    </li>

                </ul>
            </div>

            <div className="tabSkill description" data-id="tabSkl">
                <h3 className="skill_title">Skills</h3>
                <ul className="skill_list">
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.3s'}}>
                        HTML5
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.4s'}}>
                        CSS3
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.5s'}}>
                        JavaScript
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.6s'}}>
                        JQuery
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.7s'}}>
                        Photoshop
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.8s'}}>
                        PHP
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1s'}}>
                        MSSQLSERVER
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.8s'}}>
                        C#
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1s'}}>
                        MySQL
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.9s'}}>
                        Laravel
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.1s'}}>
                        Bootstrap 
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1s'}}>
                        Python
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.2s'}}>
                        Git 
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.2s'}}>
                        Django 
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.2s'}}>
                        Microsoft Office
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1s'}}>
                        M365
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1s'}}>
                        Power Apps
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.9s'}}>
                        Power Automate
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.1s'}}>
                        SharePoint
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1s'}}>
                        Azure DevOps(Power Platform)
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.2s'}}>
                        AWS
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.2s'}}>
                        PowerShell Script
                    </li>

                </ul>
            </div>

            <div className="tabSkill description" data-id="tabTol">
                <h3 className="skill_title">Tools</h3>
                <ul className="skill_list">
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.2s'}}>
                        Visual Studio Code
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.3s'}}>
                        Sublime Text
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.3s'}}>
                        Microsoft Visual Studio
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.5s'}}>
                        Adobe Photoshop
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.7s'}}>
                        Git
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.8s'}}>
                        Beyond Compare
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '.9s'}}>
                        XAMPP
                    </li>

                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1s'}}>
                        Figma
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.1s'}}>
                        Postman API Platform
                    </li>
                    <li className="animate__animated animate__flipInX" style={{animationDelay: '1.2s'}}>
                        Termius -SSH Platform
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Experiences;