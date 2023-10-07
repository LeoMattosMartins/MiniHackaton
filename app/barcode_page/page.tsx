import Image from  'next/image'

export default function Home(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    Welcome to the Barcode Scanner!
          
                </p>
            </div>
        </main>
    )
}
