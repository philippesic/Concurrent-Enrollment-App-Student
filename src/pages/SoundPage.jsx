import useSound from 'use-sound'
import typeFile from '../media/typing-sounds.mp3'

export default function() {
  const [play, { stop }] = useSound(typeFile)

  return (
    <>
      <button onClick={play}>▶️</button>
      <button onClick={() => stop()}>⏸</button>
    </>
  )
}
