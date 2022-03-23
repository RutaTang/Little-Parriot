import { createContext, useContext, useEffect, useRef, useState } from "react";

const StateContext = createContext();

const StateProvider = (props) => {
  const [playFullScreen, setPlayFullScreen] = useState(false);
  const [page, setPage] = useState(0);

  const audioRef = useRef();
  const [audioSrc, setAudioSrc] = useState();
  const [isPlay, setIsPlay] = useState(false);
  const [audioTotalDuration, setAudioTotalDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);

  useEffect(() => {
		let loadmetaListener = null;
    let pauseListener = null;
    let playListener = null;
    let timeupdateListener = null;

    if (audioRef.current) {
      pauseListener = audioRef.current.addEventListener("pause", () => {
        setIsPlay(false);
      });
      playListener = audioRef.current.addEventListener("play", () => {
        setIsPlay(true);
      });
			loadmetaListener = audioRef.current.addEventListener("loadedmetadata", () => {
      	setAudioTotalDuration(audioRef.current.duration);
			})

      timeupdateListener = audioRef.current.addEventListener(
        "timeupdate",
        () => {
          setAudioCurrentTime(audioRef.current.currentTime);
        },
      );
    }
    return () => {
      removeEventListener("pause", pauseListener);
      removeEventListener("play", playListener);
      removeEventListener("timeupdate", timeupdateListener);
    };
  }, [audioSrc]);

  return (
    <StateContext.Provider
      value={{
        isPlay,
        audioSrc,
        setAudioSrc,
        playFullScreen,
        setPlayFullScreen,
        page,
        setPage,
				audioRef,
        audioTotalDuration,
        audioCurrentTime,
      }}
    >
      {audioSrc && <audio autoPlay ref={audioRef} src={audioSrc}></audio>}
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
