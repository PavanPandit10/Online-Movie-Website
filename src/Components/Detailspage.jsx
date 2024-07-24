import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import ST from '../Assets/ST.jpg'
import st1 from '../Assets/st1.png'
import st2 from '../Assets/st2.png'
import st3 from '../Assets/st3.png'
import st4 from '../Assets/st4.png'
import st5 from '../Assets/st5.png'
import st6 from '../Assets/st6.png'
import st7 from '../Assets/st7.png'
import st8 from '../Assets/st8.png'
import ext from '../Assets/ext.jpg'
import got from '../Assets/got.jpg'
import sg from '../Assets/sg.jpg'
import im from '../Assets/im.jpg'
import pb from '../Assets/pb.jpg'
import { useParams } from 'react-router-dom';
import { useEffect , useState} from 'react'
import axios from 'axios'


const Detailspage = () => {
 

    
    const params = useParams()
    const [apistate, SetApiState] = useState({})
  
    const fatchData = async () => {
      console.log(`http://localhost:4000/movies/${params.id}`)
       
            const fakeApiData = await axios.get(`http://localhost:4000/movies/${params.id}`)
  
            console.log("fakeApiData", fakeApiData)
            SetApiState(fakeApiData.data) 
    }
    useEffect(() => {
        fatchData()
        console.log()
    }, [])
  
   

  return (
    <>
    <Navbar/>
    <div className='bg-gray-900 h-[2570px] md:h-[2120px] lg:h-[1820px] '>
        
        <div className='bg-slate-950 mx-auto  h-[250px] w-[440px] md:h-[270px] md:w-[740px] lg:h-[420px] lg:w-[1350px] shadow-lg shadow-indigo-500/40'>

            <div className='grid grid-cols-2 '>
                <div>
                    <img className='h-[230px] w-[130px] mt-2 md:h-[250px] md:w-[190px] ml-3 lg:h-[380px] lg:w-[280px] lg:mt-[30px] lg:ml-14 ' src={apistate.image} alt="" />
                </div>
                <div className='font-semibold text-white mt-12 ml-[-50px] md:ml-[-120px] lg:ml-[-280px]'>
                    <h2 className='text-[13px] md:text-[16px] lg:text-[30px]'>{apistate.name}</h2>
                    <h4 className='text-[13px] mt-2 md:text-[16px] lg:text-[25px]'>{apistate.episode}<span className='hover:bg-blue-600 px-1 py-[1px] pb-1 border-[1px] rounded-md ml-7 lg:px-3 lg:pb-2 '><button className='text-[10px] lg:text-[15px] '>Watch Now</button></span> </h4>
                <div className=' h-[110px] w-[250px] mt-2 md:w-[400px] lg:w-[660px]'>
                    <h2 className='text-[13px] md:text-[16px] lg:text-[25px]'>Overview</h2>
                    <p className='text-[10px] md:text-[12px] lg:text-[15px] font-normal '>{apistate.overview}</p>
                </div>
                    <h4 className='text-[11px] mt-1 md:text-[13px] md:mt-[-10px] lg:mt-1 lg:text-[20px]' >Rating {apistate.rating}</h4>
                </div>
            </div>

        </div> <br />

        <div className=' mx-auto h-[80px] w-[420px] md:h-[90px] md:w-[720px] lg:h-[180px] lg:w-[1250px] mt-2'>

            <h1 className='font-semibold text-white text-[14px] md:text-[18px] lg:text-[30px]'>Top Cast</h1>

            <div className='grid grid-cols-8 lg:gap-12 mt-2 lg:mt-5'>

                <div className=' bg-slate-400 h-[30px] w-[30px] lg:h-[80px] lg:w-[80px] rounded-full grid place-items-center '>
                    <img className=' h-[23px] ml-[1px] mt-1 lg:h-[60px] lg:w-[80px lg:mt-2' src={st1} alt="" />
                    <h5 className='text-white text-[8px] ml-[3px] mt-3 lg:text-[15px]'>Eleven</h5>
                </div>
                <div className=' bg-slate-400 h-[30px] w-[30px] lg:h-[80px] lg:w-[80px] rounded-full grid place-items-center '>
                    <img className=' h-[18px] ml-[1px] mt-1 lg:h-[60px] lg:w-[80px]' src={st2} alt="" />
                    <h5 className='text-white text-[8px] ml-[3px] mt-3 lg:text-[15px] lg:mt-4'>Mike</h5>
                </div>
                <div className=' bg-slate-400 h-[30px] w-[30px] lg:h-[80px] lg:w-[80px] rounded-full grid place-items-center '>
                    <img className=' h-[23px] ml-[5px] mt-1 lg:h-[60px] lg:w-[90px] lg:mt-2' src={st3} alt="" />
                    <h5 className='text-white text-[8px] ml-[3px] mt-3 lg:text-[15px] lg:mt-3'>Wheel</h5>
                </div>
                <div className=' bg-slate-400 h-[30px] w-[30px] lg:h-[80px] lg:w-[80px] rounded-full grid place-items-center '>
                    <img className=' h-[23px] w-[35px] ml-[1px] mt-1 lg:h-[65px] lg:w-[120px] lg:mt-1' src={st4} alt="" />
                    <h5 className='text-white text-[8px] ml-[3px] mt-3 lg:text-[15px]'>Dustin</h5>
                </div>
                <div className=' bg-slate-400 h-[30px] w-[30px] lg:h-[80px] lg:w-[80px] rounded-full grid place-items-center '>
                    <img className=' h-[24px] ml-[1px]  lg:h-[62px] lg:w-[45px] lg:mt-2' src={st5} alt="" />
                    <h5 className='text-white text-[8px] ml-[3px] mt-3 lg:text-[15px]'>Loucas</h5>
                </div>
                <div className=' bg-slate-400 h-[30px] w-[30px] lg:h-[80px] lg:w-[80px] rounded-full grid place-items-center '>
                    <img className=' h-[18px] ml-[1px] mt-1 lg:h-[60px] lg:w-[58px] lg:mt-2' src={st6} alt="" />
                    <h5 className='text-white text-[8px] ml-[3px] mt-3 lg:text-[15px]'>Max</h5>
                </div>
                <div className=' bg-slate-400 h-[30px] w-[30px] lg:h-[80px] lg:w-[80px] rounded-full grid place-items-center '>
                    <img className=' h-[18px] ml-[1px] mt-1 lg:h-[60px] lg:w-[75px] lg:mt-1' src={st7} alt="" />
                    <h5 className='text-white text-[8px] ml-[3px] mt-3 lg:text-[15px] lg:mt-4'>Steve</h5>
                </div>
                <div className=' bg-slate-400 h-[30px] w-[30px] lg:h-[80px] lg:w-[80px] rounded-full grid place-items-center '>
                    <img className=' h-[18px] ml-[1px] mt-1 lg:h-[63px] lg:mt-1' src={st8} alt="" />
                    <h5 className='text-white text-[8px] ml-[3px] mt-3 lg:text-[15px]'>Nancy</h5>
                </div>
            
            </div>         
        </div> <br />

            <div className='place-content-center place-items-center mx-auto h-[90px] w-[420px] md:h-[160px] md:w-[720px] lg:h-[200px] lg:w-[1250px] '>
            <h1 className=' md:text-[18px] lg:text-[30px]  font-semibold text-white'>Short Clips</h1>
        <div className=' grid grid-cols-3  '>
            <iframe className='rounded-md w-[120px] h-[60px] md:w-[200px] md:h-[120px] lg:w-[300px] lg:h-[150px]'  src={apistate.url1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='rounded-md w-[120px] h-[60px] md:w-[200px] md:h-[120px] lg:w-[300px] lg:h-[150px]'  src={apistate.url2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='rounded-md w-[120px] h-[60px] md:w-[200px] md:h-[120px] lg:w-[300px] lg:h-[150px]'  src={apistate.url1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div> <br />


            <div className='mx-auto mt-5 h-[1000px] w-[420px] md:h-[680px] md:w-[700px] lg:h-[450px] lg:w-[1250px] '>
                <h1 className='font-semibold text-white text-[14px] md:text-[16px] lg:text-[25px]'>Similar Movies</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 py-5 lg:grid-cols-5   place-items-center  '>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[230px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[230px] rounded-lg' src={pb} alt="" />
                            <div className=' grid place-items-center'>
                            <h4 className='font-semibold mt-2 '>PEAKY BLINDERS</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md '>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[230px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[230px] rounded-lg' src={got} alt="" />
                            <div className=' grid place-items-center'>
                                <h4 className='font-semibold mt-2'>GAME OF THORN</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md'>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[230px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[230px] rounded-lg' src={sg} alt="" />
                            <div  className=' grid place-items-center'>
                            <h4 className='font-semibold mt-2'>SQUID GAME</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md'>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[230px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[230px] rounded-lg' src={im} alt="" />
                            <div  className=' grid place-items-center'>
                            <h4 className='font-semibold mt-2'>IRON MAN</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md'>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[230px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[230px] rounded-lg' src={ext} alt="" />
                            <div  className=' grid place-items-center'>
                            <h4 className='font-semibold mt-2'>EXTRACTION 2</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md'>Watch Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto mt-5 h-[1000px] w-[420px] md:h-[680px] md:w-[700px] lg:h-[450px] lg:w-[1250px] '>
                <h1 className='font-semibold text-white text-[14px] md:text-[16px] lg:text-[25px]'>Similar Movies</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 py-5 lg:grid-cols-5   place-items-center  '>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[230px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[230px] rounded-lg' src={im} alt="" />
                            <div className=' grid place-items-center'>
                            <h4 className='font-semibold mt-2 '>IRON MAN`</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md '>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[220px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[220px] rounded-lg' src={ext} alt="" />
                            <div className=' grid place-items-center'>
                                <h4 className='font-semibold mt-2'>EXTRACTION 2</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md'>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[230px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[230px] rounded-lg' src={sg} alt="" />
                            <div  className=' grid place-items-center'>
                            <h4 className='font-semibold mt-2'>SQUID GAME</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md'>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[230px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[230px] rounded-lg' src={got} alt="" />
                            <div  className=' grid place-items-center'>
                            <h4 className='font-semibold mt-2'>GAME OF THORN</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md'>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 rounded-lg h-[300px] w-[190px] md:w-[210px] lg:h-[350px] lg:w-[230px] hover:border-cyan-400 '>
                        <div className='text-white '>
                             <img className='h-[230px] w-[190px] md:w-[210px] lg:h-[270px] lg:w-[230px] rounded-lg' src={pb} alt="" />
                            <div  className=' grid place-items-center'>
                            <h4 className='font-semibold mt-2'>PEAKY BLINDERS</h4>
                                <button className='hover:bg-blue-800 hover:border-none px-4 py-1 mt-1 border-[1px] text-[13px] border-white rounded-md'>Watch Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
    </div>
    </>
  )
}

export default Detailspage