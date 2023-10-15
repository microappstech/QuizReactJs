import { useState, useEffect } from "react";
import axios from "axios";
import Modalname from '../Components/Modelname'
import Navbar from '../Components/Navbar';
export default function Home(){
    const [isModalOpen, setModalOpen] = useState(false);
    const [categories, setCategories] = useState(null)

    const openModalname = () => {
      setModalOpen(true);
    };
  
    const closeModalname = () => {
      setModalOpen(false);
    }; 
    const url ="https://localhost:7174/api/Categories";
    // useEffect(()=>{
    //     const FetchDataQuiz = async ()=>{
    //         try {
    //             await axios.get(url)
    //                 .then((response)=>{
    //                     setCategories(response.data);
    //                     console.log('Data Model', categories)
    //                 });
    //           } catch (error) {
    //             console.error('Error fetching data:', error);
    //           }
    //     };
    //     FetchDataQuiz();
            
    // },[1])

    return (
        <div className="">
            <Navbar user=""/>
            <Modalname isOpen={isModalOpen} Onclose={closeModalname} />
            <div className="bg-gradient-to-br from-indigo-900 to-green-900 min-h-screen overflow-hidden">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="w-4/5">
                        <h1 className="mt-16 text-white text-6xl font-bold">Testez vos compétences <br />
                        <span   span className="text-blue-400">Et améliorez-les</span></h1>
                    </div>
                    <div className="w-5/6 my-10 ml-6 flex justify-between">
                        <h3 className="text-gray-300">
                            Des Quizes gratuit dans tous les domaines <br />
                            <strong className="text-white">Supporter nous pour mettre plus des ressource gratuit.</strong>
                            <br />Hamzamouddakur@gmail.com.
                        </h3>
                        
                        <button onClick={openModalname} className="group z-10 relative h-16 w-80 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold cursor-pointer text-white">
                            Commencer
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>

                    </div>
                    <div className="hiden sm:block opacity-50 z-0">
                    <div className="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
                    <div className="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
                    <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
                    </div>
                    <div className="text-white relative">
                    <h3 className="text-uppercase font-semibold">les quizs plus utiliser</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-5 uppercase">
                        <div className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='800px' width='800px' id='Layer_1' viewBox='0 0 511.883 511.883' xml:space='preserve'%3E%3Cpolygon style='fill:%23CCD1D9;' points='341.251,479.885 170.618,479.885 191.894,373.316 319.942,373.285 '/%3E%3Cg%3E%3Cpath style='fill:%23E6E9ED;' d='M511.883,383.909c0,5.905-4.781,10.653-10.67,10.653H10.654C4.78,394.561,0,389.814,0,383.908 V42.651c0-5.889,4.78-10.653,10.654-10.653h490.559c5.889,0,10.67,4.764,10.67,10.653V383.909z'/%3E%3Cpath style='fill:%23E6E9ED;' d='M341.251,479.885H170.618c-5.874,0-10.654-4.779-10.654-10.653c0-5.905,4.78-10.686,10.654-10.686 h170.633c5.889,0,10.669,4.78,10.669,10.686C351.92,475.107,347.139,479.885,341.251,479.885z'/%3E%3C/g%3E%3Cpath style='fill:%23656D78;' d='M501.213,31.998H10.654C4.78,31.998,0,36.762,0,42.651v287.926h511.883V42.651 C511.883,36.762,507.102,31.998,501.213,31.998z'/%3E%3Cpath style='fill:%23434A54;' d='M266.595,362.569c0,5.905-4.765,10.685-10.654,10.685c-5.889,0-10.669-4.779-10.669-10.685 c0-5.874,4.78-10.653,10.669-10.653C261.83,351.916,266.595,356.695,266.595,362.569z'/%3E%3Cpath style='fill:%23FC6E51;' d='M373.243,74.644H53.317c-5.89,0-10.669,4.78-10.669,10.669c0,5.89,4.78,10.67,10.669,10.67h319.926 c5.889,0,10.67-4.78,10.67-10.67C383.913,79.424,379.131,74.644,373.243,74.644z'/%3E%3Cpath style='fill:%23AC92EB;' d='M53.317,138.63h170.632c5.89,0,10.654-4.765,10.654-10.654c0-5.905-4.764-10.669-10.654-10.669 H53.317c-5.89,0-10.669,4.764-10.669,10.669C42.647,133.865,47.427,138.63,53.317,138.63z'/%3E%3Cpath style='fill:%2348CFAD;' d='M53.317,181.29h234.618c5.89,0,10.654-4.78,10.654-10.669s-4.765-10.653-10.654-10.653H53.317 c-5.89,0-10.669,4.764-10.669,10.653C42.647,176.51,47.427,181.29,53.317,181.29z'/%3E%3Cpath style='fill:%235D9CEC;' d='M53.317,223.938l149.293,0.016c5.905,0,10.669-4.78,10.669-10.669 c0-5.889-4.764-10.669-10.669-10.669H53.317c-5.89,0-10.669,4.78-10.669,10.669C42.647,219.173,47.427,223.938,53.317,223.938z'/%3E%3Cpath style='fill:%23FFCE54;' d='M330.581,245.275H53.317c-5.89,0-10.669,4.78-10.669,10.654c0,5.905,4.78,10.67,10.669,10.67h277.264 c5.905,0,10.67-4.765,10.67-10.654C341.251,250.057,336.486,245.275,330.581,245.275z'/%3E%3Cpath style='fill:%23ED5564;' d='M138.625,287.93H53.317c-5.89,0-10.669,4.781-10.669,10.654c0,5.905,4.78,10.686,10.669,10.686 h85.309c5.905,0,10.669-4.78,10.669-10.686C149.295,292.711,144.53,287.93,138.625,287.93z'/%3E%3C/svg%3E" width={40}/>
                        <div>
                            <span>Programmation</span>
                            <span className="text-xs text-blue-300 block">Generale</span>
                        </div>
                        <div>
                            <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                        </div>
                        </div>

                        <div className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
                        <img className="w-9" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M5 8l6 6'%3E%3C/path%3E%3Cpath d='M4 14l6-6 2-3'%3E%3C/path%3E%3Cpath d='M2 5h12'%3E%3C/path%3E%3Cpath d='M7 2h1'%3E%3C/path%3E%3Cpath d='M22 22l-5-10-5 10'%3E%3C/path%3E%3Cpath d='M14 18h6'%3E%3C/path%3E%3C/g%3E%3C/svg%3E" alt="" />
                        <div>
                            <span>Langues</span>
                            <span className="text-xs text-blue-300 block">Globale</span>
                        </div>
                        <div>
                            <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                        </div>
                        </div>

                        <div className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
                        <img className="w-9" src="data:image/svg+xml,%3Csvg height='200px' width='200px' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 473.931 473.931' xml:space='preserve' fill='%23000000'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Ccircle style='fill:%23D7DABA;' cx='236.966' cy='236.966' r='236.966'%3E%3C/circle%3E%3Cpath style='fill:%23A53460;' d='M144.398,93.791c-8.827,0-15.981,7.154-15.981,15.981v255.757c0,8.827,7.154,15.981,15.981,15.981 H328.22c8.827,0,15.981-7.154,15.981-15.981V167.814l-77.05-74.023H144.398z'%3E%3C/path%3E%3Cg%3E%3Cpath style='fill:%238E2852;' d='M344.201,167.814h-61.066c-8.827,0-15.981-7.154-15.981-15.981V93.791L344.201,167.814z'%3E%3C/path%3E%3Cpath style='fill:%238E2852;' d='M263.966,271.772c0,10.189-8.258,18.447-18.439,18.447H110.876 c-10.189,0-18.439-8.258-18.439-18.447v-56.351c0-10.189,8.251-18.443,18.439-18.443h134.651c10.181,0,18.439,8.254,18.439,18.443 V271.772z'%3E%3C/path%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%23FFFFFF;' d='M155.814,253.014c0,2.268-0.584,4.307-1.751,6.114c-1.171,1.807-2.881,3.222-5.13,4.247 c-2.249,1.025-4.917,1.534-8.007,1.534c-3.701,0-6.754-0.7-9.156-2.099c-1.706-1.007-3.091-2.35-4.153-4.03 c-1.066-1.68-1.601-3.311-1.601-4.898c0-0.92,0.322-1.71,0.958-2.365c0.644-0.655,1.456-0.984,2.443-0.984 c0.801,0,1.482,0.254,2.036,0.767c0.55,0.513,1.025,1.268,1.418,2.275c0.479,1.194,0.995,2.189,1.549,2.993 c0.55,0.801,1.332,1.463,2.339,1.983c1.007,0.52,2.327,0.778,3.966,0.778c2.253,0,4.082-0.524,5.485-1.572 c1.411-1.048,2.11-2.357,2.11-3.925c0-1.246-0.382-2.256-1.141-3.031c-0.756-0.778-1.74-1.369-2.937-1.777 c-1.205-0.408-2.81-0.846-4.823-1.306c-2.694-0.629-4.947-1.369-6.769-2.211c-1.811-0.846-3.255-1.994-4.318-3.454 c-1.066-1.459-1.601-3.27-1.601-5.437c0-2.062,0.561-3.899,1.688-5.5c1.126-1.601,2.754-2.836,4.887-3.697s4.636-1.291,7.521-1.291 c2.301,0,4.292,0.284,5.976,0.857c1.676,0.572,3.072,1.328,4.18,2.275c1.108,0.947,1.92,1.942,2.428,2.978 c0.509,1.036,0.767,2.054,0.767,3.042c0,0.905-0.318,1.717-0.962,2.443c-0.636,0.726-1.437,1.089-2.391,1.089 c-0.868,0-1.53-0.217-1.979-0.651c-0.453-0.434-0.943-1.149-1.474-2.137c-0.685-1.414-1.5-2.518-2.455-3.311 c-0.954-0.793-2.488-1.19-4.602-1.19c-1.961,0-3.54,0.43-4.748,1.291c-1.197,0.861-1.8,1.897-1.8,3.109 c0,0.752,0.206,1.399,0.614,1.946c0.408,0.546,0.973,1.014,1.688,1.407s1.441,0.7,2.174,0.92c0.733,0.221,1.946,0.546,3.633,0.973 c2.114,0.494,4.026,1.04,5.744,1.639c1.71,0.599,3.173,1.321,4.37,2.174c1.205,0.853,2.14,1.931,2.814,3.237 C155.481,249.523,155.814,251.125,155.814,253.014z'%3E%3C/path%3E%3Cpath style='fill:%23FFFFFF;' d='M192.42,259.615c1.108,0.752,2.32,1.482,3.633,2.185c1.313,0.703,2.181,1.268,2.608,1.688 c0.427,0.419,0.64,1.01,0.64,1.777c0,0.546-0.251,1.093-0.756,1.639c-0.501,0.546-1.111,0.819-1.826,0.819 c-0.58,0-1.283-0.187-2.11-0.561c-0.827-0.374-1.796-0.921-2.915-1.639c-1.115-0.715-2.339-1.553-3.667-2.507 c-2.473,1.261-5.508,1.893-9.107,1.893c-2.915,0-5.53-0.464-7.843-1.396c-2.309-0.932-4.251-2.268-5.818-4.015 s-2.746-3.824-3.543-6.23c-0.79-2.406-1.186-5.021-1.186-7.854c0-2.881,0.412-5.527,1.239-7.929 c0.831-2.406,2.028-4.449,3.596-6.14s3.48-2.978,5.729-3.876c2.249-0.898,4.808-1.343,7.674-1.343c3.888,0,7.229,0.79,10.013,2.365 c2.791,1.575,4.902,3.82,6.331,6.728s2.148,6.32,2.148,10.245C197.254,251.42,195.642,256.135,192.42,259.615z M186.459,255.472 c1.055-1.212,1.837-2.645,2.342-4.296c0.501-1.654,0.752-3.573,0.752-5.755c0-2.746-0.442-5.126-1.328-7.136 s-2.152-3.532-3.802-4.565c-1.643-1.033-3.532-1.549-5.665-1.549c-1.515,0-2.919,0.284-4.209,0.857 c-1.287,0.572-2.395,1.403-3.326,2.496c-0.928,1.093-1.658,2.485-2.2,4.183c-0.535,1.699-0.804,3.603-0.804,5.717 c0,4.314,1.007,7.637,3.02,9.964c2.013,2.327,4.554,3.491,7.622,3.491c1.261,0,2.559-0.266,3.888-0.793 c-0.801-0.599-1.804-1.194-3.005-1.792c-1.205-0.599-2.028-1.059-2.47-1.381c-0.442-0.322-0.666-0.782-0.666-1.381 c0-0.513,0.213-0.962,0.64-1.355c0.427-0.393,0.894-0.587,1.407-0.587C180.211,251.585,182.807,252.879,186.459,255.472z'%3E%3C/path%3E%3Cpath style='fill:%23FFFFFF;' d='M211.192,230.736v27.292h15.397c1.227,0,2.17,0.299,2.829,0.894 c0.655,0.599,0.984,1.347,0.984,2.253c0,0.92-0.326,1.665-0.973,2.238c-0.647,0.572-1.594,0.857-2.84,0.857h-18.338 c-1.654,0-2.844-0.367-3.57-1.1c-0.722-0.733-1.085-1.92-1.085-3.555v-28.879c0-1.534,0.348-2.687,1.033-3.454 c0.696-0.767,1.601-1.152,2.728-1.152c1.145,0,2.069,0.382,2.776,1.137C210.841,228.03,211.192,229.187,211.192,230.736z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="" />
                        <div>
                            <span>SQL</span>
                            <span className="text-xs text-blue-300 block">Base de Donnes</span>
                        </div>
                        <div>
                            <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                        </div>
                        </div>

                        <div className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
                        <img className="w-9" src="data:image/svg+xml,%3Csvg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z' fill='url(%23paint0_linear_87_8204)'%3E%3C/path%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z' fill='url(%23paint1_linear_87_8204)'%3E%3C/path%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_87_8204' x1='12.4809' y1='2' x2='12.4809' y2='22.7407' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23327EBD'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%231565A7'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_87_8204' x1='19.519' y1='9.25928' x2='19.519' y2='30' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFDA4B'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%23F9C600'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/g%3E%3C/svg%3E" alt="" />
                        <div>
                            <span>Python</span>
                            <span className="text-xs text-blue-300 block">Programmation</span>
                        </div>
                        <div>
                            <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}