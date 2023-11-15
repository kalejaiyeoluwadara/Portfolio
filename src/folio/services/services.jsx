import React from 'react'
import Single from './single'
import './services.css'
import Head from '../head'
function Services({modal,setModal,setData,data}) {
  return (
    <div id="ser" className="flex items-center  justify-center">
      <div className="sm:h-[80vh] h-auto mb-8 sm:mb-0 w-[80%] relative justify-start items-center flex flex-col gap-10">
        <Head h1={"Services"} p={"What I offer"} />
        <div className="flex sm:flex-row flex-col gap-12 mt-10 w-full">
          <Single
            setData={setData}
            modal={modal}
            data={data}
            setModal={setModal}
            name={"Frontend developer"}
            id={0}
          />
          <Single
            setData={setData}
            data={data}
            modal={modal}
            setModal={setModal}
            name={"Backend developer"}
            id={1}
          />
          <Single
            setData={setData}
            data={data}
            modal={modal}
            setModal={setModal}
            name={"UI/UX designer"}
            id={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Services
