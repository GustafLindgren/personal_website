import Subnavbar from "../../components/Subnavbar";

const experiences = [
    ['/experience/willys', 'Shop Assistant'], 
    ['/experience/webgroup', 'Web Developer'],
    ['/experience/despec', 'Warehouse Worker'],
    //['/experience/coop', 'Coop'],
    ['/experience/studybuddy', 'Homework Helper'],
    ['/experience/kaffemoppen', 'Barista']
];



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