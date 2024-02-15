import React, { useRef, useState } from "react";
import Card from "./Card";

function ProfileCard() {

    let d = [
      {
        "_id": "1",
        "photos": [
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "John Doe",
        "dateOfBirth": "1985-07-20"
      },
      {
        "_id": "2",
        "photos": [
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "Jane Smith",
        "dateOfBirth": "1992-03-12"
      },
      {
        "_id": "3",
        "photos": [
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "Alex Johnson",
        "dateOfBirth": "1988-11-05"
      },
      {
        "_id": "4",
        "photos": [
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "Emily Brown",
        "dateOfBirth": "1995-09-25"
      },
      {
        "_id": "5",
        "photos": [
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "Daniel Wilson",
        "dateOfBirth": "1982-04-08"
      },
      {
        "_id": "6",
        "photos": [
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "Sophia Miller",
        "dateOfBirth": "1998-12-15"
      },
      {
        "_id": "7",
        "photos": [
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "Michael Davis",
        "dateOfBirth": "1987-06-03"
      },
      {
        "_id": "8",
        "photos": [
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "Olivia White",
        "dateOfBirth": "1993-10-17"
      },
      {
        "_id": "9",
        "photos": [
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "William Turner",
        "dateOfBirth": "1989-02-28"
      },
      {
        "_id": "10",
        "photos": [
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/20234378/pexels-photo-20234378/free-photo-of-the-hungarian-parliament-building-is-seen-through-an-arch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13991574/pexels-photo-13991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        "name": "Ava Garcia",
        "dateOfBirth": "1997-07-10"
      }
    ]
    

    const [data,setData] = useState(d);
    const [activeCard,setActiveCard] = useState(data[data.length-1]._id );
    

    const nextCard = ()=>{
      setActiveCard(data[data.length-2]._id)
      setData(((prevQueue) => {
        const newQueue = [...prevQueue];
        newQueue.pop(); // Remove the last element
        return newQueue;
      }))
      console.log("nextcard",data.length);

    }

    const leftSwipe = ()=>{
      console.log("left"+" "+data[data.length-1]._id+activeCard);
      nextCard();
    }

    const rightSwipe = ()=>{
      console.log("right"+" "+data[data.length-1]._id);
      nextCard();
    }

  return (
    <div className="h-full w-full  flex relative justify-center items-center">
      <div className="w-[410px] h-[680px] bg-yellow-30 rounded-2xl text-black hover:cursor-pointer relative">

        {data.map((e,i)=>{

            return <Card data={e} id={e._id} key={e._id} currentElement={activeCard} leftSwipe={leftSwipe} rightSwipe={rightSwipe}/>

             
        })}
        <div className="absolute bottom-0 flex gap-4 z-20 justify-between items-center w-full px-4">
          <div className="h-16 w-16 border-2 border-yellow-400 rounded-full flex items-center justify-center">
            {/* <img className='invert h-12' src="https://cdn-icons-png.flaticon.com/128/6415/6415704.png" alt="" /> */}
          </div>
          <div className="h-16 w-16 border-2 border-red-600  rounded-full flex items-center justify-center">
            {/* <img className='invert h-12' src="https://cdn-icons-png.flaticon.com/128/54/54973.png" alt="" /> */}
          </div>
          <div className="h-16 w-16 border-2 border-blue-600 rounded-full flex items-center justify-center">
            {/* <img className='invert h-12' src="https://cdn-icons-png.flaticon.com/128/10134/10134021.png" alt="" /> */}
          </div>
          <div className="h-16 w-16 border-2 border-green-400 rounded-full flex items-center justify-center">
            {/* <img className='invert h-12' src="https://cdn-icons-png.flaticon.com/128/1077/1077086.png" alt="" /> */}
          </div>
          <div className="h-16 w-16 border-2 border-purple-600 rounded-full flex items-center justify-center">
            {/* <img className='invert h-12' src="https://cdn-icons-png.flaticon.com/128/7477/7477016.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
