import type { JSX } from "react"
import MainSection from "../components/MainSection"
import BlogPost from "../components/BlogPost"
import SideBlog from "./SideBlog";
import type { BlogPostDetails } from "../components/BlogPost";
import type { SideBlogType } from "./SideBlog";


function BlogComponent():JSX.Element {
    const imageUrl:string = "src/assets/menCar.jpg";
    const heading: string = "Blog Posts";
    const subheading: string = "Home >> Blog";
    const features: string[] = [];
    const desc :string = "Stay Connected with us and experience our premium blogs.";

    const blogData:BlogPostDetails[] = [
        {
            id:1,
            imgUrl:"src/assets/blueCar.jpg",
            heading:"How To Keep Clean The Inside Of Your Car All The Time ?",
            userPic:"src/assets/about.jpg",
            username:"Rahat",
            date:"✅27 March 2024",
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos exercitationem nobis modi iste beatae ipsam dolorum minima, ut aliquid atque illum. Aspernatur voluptate error perspiciatis accusamus ducimus vitae deserunt quidem non exercitationem! Itaque ipsa possimus doloremque fugit. Porro, blanditiis consequuntur.",
        },
        {
            id:2,
            imgUrl:"src/assets/menCar.jpg",
            heading:"How To Keep Clean The Inside Of Your Car All The Time ?",
            userPic:"src/assets/about.jpg",
            username:"Rahat",
            date:"✅27 March 2024",
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos exercitationem nobis modi iste beatae ipsam dolorum minima, ut aliquid atque illum. Aspernatur voluptate error perspiciatis accusamus ducimus vitae deserunt quidem non exercitationem! Itaque ipsa possimus doloremque fugit. Porro, blanditiis consequuntur.",
        }
    ]

    const sideBlogData:SideBlogType[] = [
        {
            id:1,
            heading:"Our Recent Blogs",
            imgUrl:"src/assets/car.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci sunt facere, ipsa neque, itaque minus ipsam consectetur soluta, porro quam aperiam laborum.!",
            date:"02 April 2025"
        },
        {
            id:2,
            heading:"New trends",
            imgUrl:"src/assets/car.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci sunt facere, ipsa neque, itaque minus ipsam consectetur soluta, porro quam aperiam laborum.",
            date:"03 April 2025"
        },
        {
            id:3,
            heading:"Our Recent Blogs",
            imgUrl:"src/assets/car.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci sunt facere, ipsa neque, itaque minus ipsam consectetur soluta, porro quam aperiam laborum.!",
            date:"03 April 2025"
        },
        {
            id:4,
            heading:"Our  Blogs",
            imgUrl:"src/assets/car.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci sunt facere, ipsa neque, itaque minus ipsam consectetur soluta, porro quam aperiam laborum.!",
            date:"03 April 2025"
        },
    ]
    return (
        <>
            <MainSection imgUrl={imageUrl} heading={heading} subheading={subheading} features={features} desc={desc} showBookingBox={false}/>


            <div className="flex gap-10">
                <div>
                    {
                blogData.map((item)=>{
                    return (
                        <BlogPost key={item.id} imgUrl={item.imgUrl} heading={item.heading} userPic={item.userPic} username={item.username} date={item.date} desc={item.desc}/>
                    )
                })}
                </div>

                <div>
                    <div>
                    {
                sideBlogData.map((item)=>{
                    return(
                        <SideBlog key={item.id} heading={item.heading} imgUrl={item.imgUrl} desc={item.desc} date={item.desc}/>
                    )
                })}
                </div>
                <div className="flex justify-center mt-40 text-white shadow-2xl h-[45%]">
                    <img src="src/assets/ad.png" alt="img can't load"className="w-[80%]" />
                </div>
                </div>
                
            </div>
            

            
        </>
    )
}

export default BlogComponent
