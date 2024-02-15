import React, { useRef, useState } from "react";
import PageIndicator from "./CardComponents/PageIndicator";
import ImageHolder from "./CardComponents/ImageHolder";
import calculateAge from "../../Utils/DOBtoYears";
import InterestBox from "./CardComponents/InterestBox";

function Card({data,currentElement ,id,rightSwipe,leftSwipe}) {
  const [page, setPage] = useState(0);

  const [like, setLike] = useState(0);
  const [nope, setNope] = useState(0);
  const [superLike, SetSuperLike] = useState(0);
  const [draging, setDraging] = useState();
  const [originalCursorPosition, setOriginalCursorPosition] = useState();

  const cardRef = useRef();


  const active = currentElement==id;

  const mouseDownHandler = (e) => {

    if(active){
      setDraging(true);
      setOriginalCursorPosition([e.clientX, e.clientY]);
      cardRef.current.style.transition = "all 0s ease 0s";
    }

  };

  const mouseMoveHandler = (e) => {
    if (draging) {
      var dx = e.clientX - originalCursorPosition[0];
      var dy = e.clientY - originalCursorPosition[1];
      var rot1 =
        dx > 0 ? Math.min((30 * dx) / 320, 30) : Math.max((30 * dx) / 320, -30);
      var rot2 =
        dx > 0
          ? Math.min((-30 * dx) / 320, 30)
          : Math.max((-30 * dx) / 320, -30);

      setLike(dx > 50 ? (dx > 150 ? 1 : dx / 150) : 0);
      setNope(dx < -50 ? (dx < -150 ? 1 : dx / -150) : 0);
      SetSuperLike(
        dy < -30 && !(dx > 50) && !(dx < -50) ? (dy < -130 ? 1 : dy / -130) : 0
      );
      cardRef.current.style.transform = `translate(${dx}px,${dy}px) rotate(${rot1}deg)`;
    }
  };

  const mouseUpHandler = (e) => {
    setDraging(false);
    
    cardRef.current.style.transition = "all 1s ease 0ms";
    if (like == 1) {
      cardRef.current.style.transform = `translate(2000px,0px) `;
      console.log(data);
      setTimeout(()=>{rightSwipe()},800)
    }
    else if (nope == 1)
      {
        cardRef.current.style.transform = `translate(-2000px,0px) `;
        console.log(data);
        setTimeout(()=>{leftSwipe()},800)
        
      }
    else cardRef.current.style.transform = `translate(0px,0px) rotate(0deg)`;

    setLike(0);
    setNope(0);
    SetSuperLike(0);
  };



  const leftClickHadler = (e) => {
    setPage((prev) => {
      return Math.max(0, --prev);
    });
  };
  const rightClickHadler = (e) => {
    setPage((prev) => {
      return Math.min(data.photos.length - 1, ++prev);
    });
  };





  return (
    <div
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={`h-full group  w-full absolute flex flex-col rounded-t-2xl overflow-hidden select-none `}
      draggable={false}
      style={{ transition: "all 0s ease 0s" }}
    >
      <ImageHolder src={data.photos} page={page} />

      <div
        className="h-full w-full absolute "
        style={{
          background: "rgb(255,255,255)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, rgba(0,0,0,1) 85%, rgba(0,0,0,1) 100%)",
        }}
      ></div>

      <div className="h-full w-full flex flex-col select-none absolute">
        <PageIndicator
          size={data.photos.length}
          page={page}
          setPage={setPage}
        />
        <div className="w-full mt-auto mb-32  px-4">
          <div className="flex gap-4 items-end">
            <span className="font-bold text-4xl">{data.name}</span>
            <span className="text-xl font-light">
              {calculateAge(data.dateOfBirth)}
            </span>
            <span className="py-1">✓</span>
          </div>

          <div className="my-2 flex gap-2 flex-wrap">
            <InterestBox data={"Travel"} />
            <InterestBox data={"Spotify"} />
            {/* <div>{like}</div> */}
          </div>
        </div>
      </div>

      <div className="absolute  w-full top-[45%]  flex justify-between">
        <img
          onClick={leftClickHadler}
          className="invert rotate-180 h-8 group-hover:opacity-100 opacity-0"
          src="https://cdn-icons-png.flaticon.com/64/2722/2722985.png"
          alt=""
        />
        <img
          onClick={rightClickHadler}
          className="invert h-8 group-hover:opacity-100 opacity-0"
          src="https://cdn-icons-png.flaticon.com/64/2722/2722985.png"
          alt=""
        />
      </div>

      <div
        className={` text-4xl tracking-widest px-4 py-1 border-red-600 rounded-lg font-bold border-4 text-red-600 w-fit absolute top-32 right-8 rotate-[40deg] `}
        style={{ opacity: nope }}
      >
        NOPE
      </div>
      <div
        className={` text-4xl tracking-widest px-4 py-1 border-green-400 rounded-lg font-bold border-4 text-green-400 w-fit absolute top-32 left-8 rotate-[-40deg] `}
        style={{ opacity: like }}
      >
        LIKE
      </div>
      <div
        className={` text-4xl tracking-widest px-4 py-1 border-sky-500 rounded-lg font-bold border-4 text-sky-500 w-fit absolute bottom-56 left-20 rotate-[-20deg] `}
        style={{ opacity: superLike }}
      >
        SUPERLIKE
      </div>
    </div>
  );
}

export default Card;
