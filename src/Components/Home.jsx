import React from 'react'
;
import Footer from './Footer';
import Welcome from './Welcome';
import { useSelector  } from "react-redux";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



const Home = () => {

    const data = useSelector((state) => {
        return state.list;
    }
    );
    console.log(data);

    return (
        <>
        <Navbar/>
        <Welcome/>

        <div className='bg-gray-900 h-[2320px] md:h-[1700px] lg:h-[1100px] py-10 text-center text-white'>

            <div className='mx-auto w-[400px] h-[1050px] md:w-[680px] md:h-[700px] lg:w-[1200px] lg:h-[450px]'>

                <div>
                    <h1 className='text-2xl  text-left ml-4'>New Show</h1>
                </div>

                <div className='grid grid-cols-2  md:grid-cols-3 py-5 lg:grid-cols-5   '>

                    {data.map((veduData) => {
                        return (
                           <Link to={`/detailspage/${veduData.id}`}> <div className='  rounded-lg h-[300px] w-[190px]  md:w-[210px] lg:h-[350px] lg:w-[220px] shadow-lg hover:shadow-indigo-500/100 '>
                                <div className=' '>
                                    <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[220px] rounded-lg' src={veduData?.image} alt="" />
                                    <h4 className='font-semibold text-[12px] lg:text-[15px] lg:mt-2'>{veduData?.title}</h4>
                                    <div>
                                        <button className='hover:bg-blue-800 hover:border-none lg:px-4 lg:text-[13px] p-1 mt-1 border-[1px] text-[11px] border-white rounded-md'>Watch Now</button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        );
                    })}
                </div>
            </div>



            <div className=' mt-[30px] lg:mt-[40px] mx-auto w-[400px] h-[1050px] md:w-[680px] md:h-[700px] lg:w-[1200px] lg:h-[450px]  '>

                <div>
                    <h1 className='text-2xl text-left ml-4'>Movies</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 py-5 lg:grid-cols-5  justify-items-center '>

                    {data.map((veduData) => {
                        return (
                            <div className=' rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[220px] shadow-lg hover:shadow-indigo-500/100  '>
                                <div className=' '>
                                    <img className='h-[230px] w-[180px] lg:h-[270px] lg:w-[220px] rounded-lg' src={veduData.image} alt="" />
                                    <h4 className='font-semibold mt-2 '>{veduData.title}</h4>
                                    <div>
                                        <button className='hover:bg-blue-600 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md'>Watch Now</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

                    <Footer/>

        </div>
        </>
    )
}

export default Home