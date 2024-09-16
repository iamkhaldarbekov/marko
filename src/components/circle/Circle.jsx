export default function Circle({top, left}) {
    return (
        <div className="w-[440px] h-[440px] -z-10 absolute rounded-[500px] bg-gradient-to-b from-[#EC008C] to-[#FC6767] opacity-50 blur-3xl" style={{top: `${top}px`, left: `${left}px`}}/>
    )
}