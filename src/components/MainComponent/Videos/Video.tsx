type videoSources = {
    src: string,
    type: string
}[]

const VideoPlayer = ({ sources }: { sources: videoSources }) => {
    return (
        <>
            <div className="group bg-secondary-gradient shadow shadow-secondary hover:shadow-lg xl:hover:rotate-6 transition-all duration-300">
                <div className="bg-primary-gradient shadow shadow-primary group-hover:shadow-lg group-hover:rotate-0 transition-all duration-300">
                    <video className="rounded-lg xl:-rotate-3 z-10 shadow group-hover:shadow-md group-hover:shadow-primary xl:group-hover:-rotate-12 transition-all duration-300" autoPlay muted loop>
                        {sources.map((source, index) => (
                            <source key={index} src={source.src} type={source.type} />
                        ))}
                        Video Format Is not Supported
                    </video>
                </div>
            </div>
        </>
    )
}

export default VideoPlayer