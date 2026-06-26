import { Dialog, DialogPanel } from "@headlessui/react"
import { X } from "lucide-react"


interface Props {
    imgSrc?: string,
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
}
//md:max-w-xl 
export const ModalImage = ({ imgSrc, isOpen, setIsOpen }: Props) => {

    return (
        <Dialog className="ease-in-out" open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="h-screen top-0 z-100 fixed">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <DialogPanel>
                    <img className="h-full w-full object-contain" src={imgSrc} alt="" />
                    {/* <button onClick={() => setIsOpen(false)}>Deactivate</button> */}
                    <button className="bg-slate-950/80 text-white rounded-full p-1 fixed top-4 left-4" onClick={() => setIsOpen(false)}><X/></button>
                </DialogPanel >
            </div>
        </Dialog>
    )


}
