
interface DeleteModelProps {
    isOpen: boolean,
    onClose: () => void, //function prop
    onConfirm: () => void,
    message?: string
}
function DeleteModel({ isOpen, onClose, onConfirm, message }: DeleteModelProps) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[5px]">
            <div className="bg-[#f2f9fc] p-6 rounded shadow-md w-96">
                <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                <p className="mb-6">{message}</p>
                <div className="flex justify-end gap-4">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModel
