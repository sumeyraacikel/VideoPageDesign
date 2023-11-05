import {
    AccountCircle,
    Chat,
    Dashboard,
    Favorite,
    LocalMovies,
    Logout, Settings,
    Stream,
    TrendingUp,
    VideogameAsset,
} from "@mui/icons-material";
import Head from "next/head";
import { useEffect, useState} from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RecomendedList from "../Components/RecomendedList";
import VideoContainer from "../Components/VideoContainer";
import Data from "../Components/Data";
import {TimelineLite, gsap} from "gsap";
import {Button, IconButton} from "@mui/material";
import Comments from "../Components/Comments";
import Videos from "../Components/Videos";
import CommentList from "../Components/CommentList";

export default function Home() {
    gsap.registerPlugin();
    const [isvideo, setvideo] = useState({
        name: Data[0].videoName,
        videoSrc: Data[0].videoSrc,
    });
    const t1 = new TimelineLite({delay: 0.3});
    useEffect(() => {
        const scrollContainer = document.querySelector("#scrollContainer");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });

        // prettier-ignore
        t1
            .from('#logo', {x: -50, opacity: 0, ease: 'back.out(1.7)', duration: 0.5}, 'Start')
            .from('#searchBox', {x: -50, opacity: 0, ease: 'back.out(1.7)', duration: 0.5}, 'Start')
            .from('#profileContainer', {x: -50, opacity: 0, ease: 'back.out(1.7)', duration: 0.5}, 'Start')
            .from('#videoContainer', {opacity: 0, duration: 0.5})
            .from('#leftMenu div', {xPercent: 100, opacity: 0, stagger: 0.1, ease: 'back.out(1.7)'}, 'Start')
            .from("#recomendedList div", {xPercent: 100, opacity: 0, stagger: 0.1, ease: 'back.out(1.7)'}, 'Start')
            .from('#scrollContainer div', {yPercent: 100, opacity: 0, stagger: 0.1, ease: 'back.out(1.7)'}, 'Start');
    }, []);

    function handleCommentSubmit() {

    }

    return (
        <div
            className="flex flex-col bg-mainBg w-screen h-screen overflow-hidden   scrollbar scrollbar-thin scrollbar-thumb-gray-800">
            <Head>
                <title>Video Player</title>

            </Head>

            <Header/>

            <div className="flex w-full h-full">

                {/* Left Menu */}
                <div
                    id="leftMenu"
                    className="sm:w-[6%] md:w-[10%] min-w-[60px] h-full flex flex-col items-center justify-evenly"
                >
                    <Menu icon={<Dashboard/>} name={"Dashboard"}/>
                    <Menu icon={<VideogameAsset/>} name={"Games"}/>
                    <Menu icon={<LocalMovies/>} name={"Movies"}/>
                    <Menu icon={<Stream/>} name={"Streamer"}/>
                    <Menu icon={<TrendingUp/>} name={"Statistics"}/>
                    <Menu icon={<Chat/>} name={"Messages"}/>
                    <Menu icon={<Favorite/>} name={"Favourite"}/>
                    <Menu icon={<Logout/>} name={"Logout"} last={true}/>
                </div>

                {/* Main Container */}
                <div className="sm:w-[94%] md:w-[90%] h-full  flex flex-col">
                    {/* top  list */}
                    <div className="w-full h-[70%] max-h-[480px]  grid grid-cols-3 gap-2 p-2">
                        <div
                            className="md:col-span-2 sm:col-span-6  rounded-lg overflow-hidden
              flex items-center justify-center
            "
                        >
                            <VideoContainer data={isvideo}/>
                        </div>
                        <div
                            className="md:col-span-1 bg-primary sm:col-span-6  overflow-y-auto
              scrollbar scrollbar-thin scrollbar-thumb-gray-800
            "
                            id="recomendedList"
                        >
                            <p className="text-textColor text-[18px] font-bold my-2 px-2">
                                Oynatma Listesi
                            </p>

                            {/* List item */}

                            {Data &&
                                Data.map((data) => (
                                    <div
                                        key={data.id}
                                        onClick={() =>
                                            setvideo({
                                                name: data.videoName,
                                                videoSrc: data.videoSrc,
                                            })
                                        }
                                    >
                                        <RecomendedList
                                            imgSrc={data.imgSrc}
                                            videoName={data.videoName}
                                            artistName={"@mediochannel"}
                                        />
                                    </div>
                                ))}
                        </div>

                    </div>

                    {/* bottom List */}
                    <div className="grid grid-cols-3">
                        <div
                            className="md:col-span-2 sm:col-span-6  rounded-lg
              flex items-center justify-items-start"
                        >
                            <IconButton  >
                                <AccountCircle className="text-gray-400 w-full h-[10%] max-h-[50px] gap-8 p-2"/>
                            </IconButton>
                            <h2 className="text-gray-100 " style={{paddingRight: "80px", fontSize: "15px"}}>mediochannel</h2>
                            <Button className="bg-buttonColor w-20 h-8" variant="contained" color="primary"
                                    onClick={handleCommentSubmit}>
                                <span className="text-xs " style={{ textTransform: "capitalize"}}> Takip et</span>
                            </Button>
                            <div
                                className="w-80 h-20 bg-transparent rounded-lg text-textColor outline-none placeholder-gray-400 px-2 ">
                                <div
                                    className="flex flex-col items-center scrollbar-none py-2"
                                    id="scrollContainer">

                                        <CommentList />

                                    <Comments/>
                                </div>
                            </div>

                        </div>

                        <div
                            className="w-112 h-20 bg-transparent text-textColor outline-none border-none placeholder-gray-400 px-2 ">
                            <div
                                className="md:col-span-1 sm:col-span-6  overflow-y-auto
              scrollbar scrollbar-thin scrollbar-thumb-gray-800 "
                                id="scrollContainer">

                                {Data &&
                                    Data.map((data) => (
                                        <div
                                            key={data.id}
                                            onClick={() =>
                                                setvideo({
                                                    name: data.videoName,
                                                    videoSrc: data.videoSrc,
                                                })
                                            }
                                        >
                                            <Videos
                                                imgSrc={data.imgSrc}
                                                videoName={data.videoName}
                                                artistName={"@mediochannel"}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
