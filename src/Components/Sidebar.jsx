import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { myConfig } from '../config'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { publish } from '../DataContext'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import '../Assets/css/Sidebar.css'





const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    const [categoryId, setCategoryId] = useState(0)
    const [Expended, setExpended] = useState(true)
    let CateId = localStorage.getItem("SelectedCategoryId");
    const [sections, setSections] = useState(null)
    const url ="https://localhost:7174/api/Categories";
    useEffect(()=>{
        setCategoryId(CateId);
        const FetchDataQuiz = async ()=>{
            try {
                await axios.get(url)
                .then((response)=>{
                    setSections(response.data);
                    console.log(response.data)
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
            FetchDataQuiz();
        
    },[1])
    const SideBarItemChanged = (selected) => {
        setCategoryId(selected)
        console.log(selected)
        publish('dataChanged', selected);
      };
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [ativeMenu, setActiveMenu] = useState("Programming");

  return (
        <div className={Expended?"sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:bg-white hover:shadow-lg expand":"sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:bg-white"}>
            <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
                <div className="w-max p-2.5 cursor-pointer" onClick={()=>setExpended(!Expended)} >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA4xJREFUeJzt3L+PFVUUwPEvu6zEhm38EYrFYkOgIiZEbayE3cYQKwmFQGWzpQnSkGBpY6JYGBMbfiQkBAqjW/jrXzDEGCloFgogJmCUEEPYZS3ue3FX38vMvHfe3Jk3309yqn3v7tk7Z+fnPQOSJEmSJEmSJEmSJEmSJEmSJEkwB5wD7gCbxkTiDvAx8HzJbVKbHcAq+SeoK/Ftb84b4zj5J6VrcazUlikwEzEIsBQ0jspbjhgkqgDUUlEF8FPQOCrvx9wJbDVLKoLcx8WuxA+9OR9byCCkpK4A68AiMB80rra7DXwCrJDmWpIkSZIkSZIkSZKGiHoc3DcDvA4cAp4CfwSPrwZ7FbjJv4sWngHXgb05k1I9XgTuM3j1yiPgA2Bntuz+bwG4BvxF/tU9VaKxfQEfUpz8z8BruRLcYgF4QP6NOU40ri/gEuUSXwfOA7vzpAmk//zcGzAiQvoColylWvJ3gZNZMm3fbn9YfBUxGbn6AvYAF0i7slcy5SDyN4a8DfwGfERqLq3DtPQwNKovoOohYFDcAN6oIdf9wMOAfHNGWF9AlIgC2AQ2gC+Z/EniQi/nP4PyrivWgLPUt7csLaoA+pHzJFEjKCqA9YKfD4uv8U5iKxQVwPvAZ6RdfNUieAycoVl3EvUfRQXwbu9zbwK/Fnx2WNR1kqgRlC0AgOdIJzJ/F3xn2KHkU2DXpP8gVVOlAPr2ka5lR9kbfE/+exhTIeck3gKOACeA3yt+d4nBRaWKmvBfdJl0c+Y8aQ1BWW9NJp1uaUIBKKMmXFq9R3rrxUsVvzct9/SzylkA+4AvgMMjfPc70nN9jSnHIaB/GfgL1Tf+BumG0jtUO1/QhHkjqOO8FdxxPgzqOB8Hd1wbF4TYFxCoTUvC7AuYgHEKoO6TPPsCJmDUAviG+peFt223Pyxa3RdwDzgFHCW9AFmZRBXAk5Kf2wA+Bw4AF4N+d1XT8gyhUX0BpyneZTWlOdS+gAl4gbRbH5RsU9vD7QsIdpDU5tVP1hdEtED0teQM6fUwL5Me+qwFjy9JkiRJkiRJkiRJqt0ccI60dj33wolpjcb2BewAVsk/QV2JxvUFHCf/pHQtQvoColYFLwWNo/KWIwbxHUEdF1UA07LWvk0a1RcwSyqC3MfFrkRYX0BUc8EmcIX0IohFYD5oXG13m/RGtRXSXEuSJEmSJEmSJEmSJEmSJEmSpA77BxUX0oUZcODiAAAAAElFTkSuQmCC" className="w-10" alt="" />
                </div>
                <ul className="mt-6 space-y-2 tracking-wide">
                    {sections !== null ? (
                            sections.map((eleme) => (
                                <li key={eleme.id} className="min-w-max" onClick={()=>SideBarItemChanged(eleme.id)}>
                                    <a href={"/sections?idCate="+eleme.id} aria-label="programming" className={eleme.id==categoryId?"relative flex items-center space-x-4 px-4 py-3 active":"relative flex items-center space-x-4 px-4 py-3"}>
                                        <img src={eleme.image}  width={40}/>
                                        <span className="-mr-1 font-medium">{eleme.name}</span>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                </ul>
            </div>
            <div className="w-max -mb-3">
                <a href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="group-hover:text-gray-700">Settings</span>
                </a>
            </div>
            </div>
        </div>
        
  )
}
