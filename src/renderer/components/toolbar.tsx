const styles = {
    icons: {
        sizeMd: 'size-5',
        sizeSm: 'size-4',
    }
}

export default function Toolbar() {
    return (
        <>
            <div className='h-9 w-full flex-row flex justify-between items-center p-2'>
                <button className="h-full w-auto aspect-square max-h-8 "></button>
                <div className="h-full w-max pl-1.5 gap-2.5 pr-1.5 max-h-8 rounded-md duration-75 hover:bg-neutral-500/15 flex-row flex justify-between">
                    <button className="flex justify-center items-center aspect-square w-auto h-full opacity-60 border-transparent rounded-sm duration-75 hover:opacity-100 active:bg-neutral-500/80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icons.sizeSm}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                    <button className="flex justify-center items-center aspect-square w-auto h-full opacity-60 border-transparent rounded-sm duration-75 hover:opacity-100 active:bg-neutral-500/80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icons.sizeSm}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                    <button className="flex justify-center items-center aspect-square w-auto h-full opacity-60 border-transparent rounded-sm duration-75 hover:opacity-100 active:bg-neutral-500/80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icons.sizeSm}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                </div>
                <button className="h-full w-auto aspect-square max-h-8 rounded-md duration-75 opacity-60 hover:bg-neutral-500/15 hover:opacity-100 active:bg-neutral-500/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icons.sizeMd}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </>
    )
}