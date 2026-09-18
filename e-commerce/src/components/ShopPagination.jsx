function ShopPagination({
    currentPage,
    setCurrentPage,
    totalPages,
}) {
    return (
        <div className="flex justify-center py-12">
            <div className="flex overflow-hidden rounded border border-[#BDBDBD]">
                <button
                    className="border-r bg-[#F3F3F3] px-6 py-4 text-sm font-bold text-[#BDBDBD]"
                    disabled={currentPage === 1}
                    onClick={() =>
                        setCurrentPage(currentPage - 1)
                    }
                >
                    First
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            setCurrentPage(index + 1)
                        }
                        className={`border-r px-5 py-4 text-sm font-bold ${currentPage === index + 1
                                ? "bg-[#23A6F0] text-white"
                                : "text-[#23A6F0]"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    className="px-6 py-4 text-sm font-bold text-[#23A6F0]"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                        setCurrentPage(currentPage + 1)
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ShopPagination;