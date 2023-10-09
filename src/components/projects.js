import {Card ,Row , Col } from "react-bootstrap"
const Projects = () => {
    const projects = [
        {
            id : 1 ,
            name : "Food Delivery App" ,
            imageUrl : "https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png.webp" ,
            gitrepo : "https://github.com/RajeshGeesala/Food-Delivery-Application.git",
            techno : "HTML , CSS , JAVASCRIPT , BOOTSTRAP ,REACT  ,REDUX",
        
        },    {
            id : 2 ,
            name : "Login Form" ,
            imageUrl : "https://assets.justinmind.com/wp-content/uploads/2018/10/inspiration-login-forms-list-768x492.png" ,
            gitrepo : "",
            techno : "HTML , CSS , JAVASCRIPT , BOOTSTRAP ,REACT ",
        },
        {
            id : 3 ,
            name : "Sign-Up Form" ,
            imageUrl : "https://i.ytimg.com/vi/aIpqUKelmp0/maxresdefault.jpg" ,
            gitrepo : "",
            techno : "HTML , CSS , JAVASCRIPT , BOOTSTRAP ,REACT ",
        },
        {
            id : 4 ,
            name : "Admin DashBoard" ,
            imageUrl : "https://media.licdn.com/dms/image/D5622AQEHRQHEJX9hrg/feedshare-shrink_800/0/1689152664046?e=1699488000&v=beta&t=XQ4vFVGi5_Yks5_f0sVKZr-tvEjFtuCxuB1naCMnFo4" ,
            gitrepo : "" ,
            techno : "HTML , CSS  , BOOTSTRAP ",
        },
        {
            id : 5 ,
            name : "E-commerce Ui" ,
            imageUrl : "https://media.licdn.com/dms/image/D5622AQGjx5Qo9mvrgg/feedshare-shrink_2048_1536/0/1691604630922?e=1699488000&v=beta&t=ke0smQovl3uRrMGreHKn5QAhiuuvoExD0oOVwcJpwPI" ,
            gitrepo : "" ,
            techno : "HTML , CSS ,  , BOOTSTRAP ",
        },
        {
            id : 6,
            name : "Basic Calculator" ,
            imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6zWVLPdiTM_EhoVhx__6KS__KeAQIlalow&usqp=CAU" ,
            gitrepo : "" ,
            techno : "HTML , CSS , JAVASCRIPT", 
        } ,
        {
            id : 7 ,
            name :"Product Launching App" ,
            imageUrl : "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2778/posts/32174/image-upload/proland_landing_page_product.jpg" ,
            gitrepo : ""  ,
            techno : "HTML , CSS , BOOTSTRAP", 
         
        } ,
        {
            id : 8 ,
            name :"Will Add More Projects Soon..." ,
            imageUrl : "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" ,
            gitrepo : ""  ,
            techno : "---" 
         
        }
    ]
    return (
       <>
      <center className="mt-5 text-white"> <h3>My Projects</h3> </center>
       <Row>
      
           {
            projects.map((project)=> ( 
                <Col>
                <Card>
                <Card.Img  variant="top" src={project.imageUrl} className="cardimg"/>
                    <Card.Body> 
                        <Card.Title>{project.name}</Card.Title> 
                        <Card.Text className="projecttext"><b>{project.techno}</b>
                          <p>GIT REPO LINK : <span><a href={project.gitrepo} target="blank" className="gitlink"> Click Here</a></span></p> 
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))
           }
      
       </Row>
       </>
    )
}

export default Projects ;