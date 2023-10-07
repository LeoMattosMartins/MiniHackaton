import Image from  'next/image'

export default function Home(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    Welcome to the Barcode Scanner!
          
                </p>
            </div>
            <div>
                <a
                href="/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                 >
                     <h2 className={`mb-3 text-2xl font-semibold`}>
                      Back Home{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                </a>
            </div>
        </main>
    )
}
