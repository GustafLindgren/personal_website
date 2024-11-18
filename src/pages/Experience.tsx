import Subnavbar from "../components/Subnavbar";

const experiences = [['/experience/willys', 'Willys'], 
    ['/experience/webgroup', 'Webgroup']];



const Experience = () => {

    
    return (
        
        <>
            <Subnavbar subnavbarItems={experiences} />
            <br></br>
            <h1>Experience</h1>
        </>
        
    )
}

export {
    experiences,
    Experience
}