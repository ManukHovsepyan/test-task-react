const Video = ({ video }: any) => {
	return (
		<video width="640" height="380" muted autoPlay loop>
			<source src={`${video?.VideoUrl}?controls=0`} type="video/mp4" />
		</video>
	)
}

export default Video;