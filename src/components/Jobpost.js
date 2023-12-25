import { useState } from "react";

const Jobpost = ({id, company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools, handleFilter}) => {
    const [isLanguagesHover, setIsLanguagesHover] = useState(false)
    
    function handleMouseOver(){
        setIsLanguagesHover(true)
    }
    function handleMouseLeave(){
        setIsLanguagesHover(false)
    }
    
    return ( 
        <>
        <div className="job-post" key={id}>
            <div>
                <img src={logo} alt="Logo" />
                <div>
                    <div className="new-featured">
                        <p id="company">{company}</p>
                        {
                            isNew && (
                                <div id="new">
                                    NEW!
                                </div>
                            )
                        }
                        {
                            featured && (
                                <div id="featured">
                                    FEATURED
                                </div>
                            )
                        }
                    </div>
                    <span id="position">{position}</span>
                    <div className="job-post-info">
                        <span id="postedAt">{postedAt}</span>
                        <span className="dot"></span>
                        <span id="contract">{contract}</span>
                        <span className="dot"></span>
                        <span id="location">{location}</span>
                    </div>
                </div>
            </div>
            <div className="job-post-languages">
                <button className={`languages ${isLanguagesHover ? 'hovered' : ''}`} onMouseEnter={handleMouseOver}onMouseLeave={handleMouseLeave} value={role} onClick={handleFilter()}>{role}</button>
                <button className={`languages ${isLanguagesHover ? 'hovered' : ''}`} onMouseEnter={handleMouseOver}onMouseLeave={handleMouseLeave} value={level} onClick={handleFilter()}>{level}</button>
                {

                    languages.map((language) => {
                        return (
                            <button className={`languages ${isLanguagesHover ? 'hovered' : ''}`} onMouseEnter={handleMouseOver}onMouseLeave={handleMouseLeave} value={language} onClick={handleFilter()}>{language}</button>
                        )
                    })
                }
                {
                    tools.map((tool) =>{
                        return (
                            <button className={`languages ${isLanguagesHover ? 'hovered' : ''}`} onMouseEnter={handleMouseOver}onMouseLeave={handleMouseLeave} value={tool} onClick={handleFilter()}>{tool}</button>
                        )
                    })
                }
                
            </div>
            
        </div>
        </>
     );
}
 
export default Jobpost;