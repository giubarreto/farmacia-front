import {  FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-orange-400 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmácia Delivery  Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <div className='flex gap-2'>
	            <a href="https://www.linkedin.com/in/giulia-barreto-849a612b0/"  target="_blank">
    	            <LinkedinLogoIcon size={48} weight='bold' />
                  </a>
                  <a href="https://www.instagram.com/giu_sbarreto?igsh=d25vbno0bGg1MGxp&utm_source=qr" target="_blank">
    	            <InstagramLogoIcon size={48} weight='bold' />
                      </a>
                   <a href="https://www.facebook.com/share/1AjpWnzNPX/?mibextid=wwXIfr" target="_blank">
    	           <FacebookLogoIcon size={48} weight='bold' />
	                 </a>
                   </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer