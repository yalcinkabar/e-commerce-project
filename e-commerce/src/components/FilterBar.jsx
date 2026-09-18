function FilterBar({
    sort,
    setSort,
    filter,
    setFilter,
}) {
    return (
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 lg:flex-row">
            <p className="text-sm font-bold text-[#737373]">
                Showing all 12 results
            </p>

            <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#737373]">
                    Views:
                </span>

                <button className="flex h-12 w-12 items-center justify-center rounded border border-[#ECECEC]">
                    ⊞
                </button>

                <button className="flex h-12 w-12 items-center justify-center rounded border border-[#ECECEC]">
                    ☰
                </button>
            </div>

            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={filter}
                    onChange={(e) =>
                        setFilter(e.target.value)
                    }
                    className="rounded border px-4 py-2 text-sm"
                />

                <select
                    value={sort}
                    onChange={(e) =>
                        setSort(e.target.value)
                    }
                    className="rounded border px-4 py-2 text-sm text-[#737373]"
                >
                    <option value="">
                        Popularity
                    </option>

                    <option value="price:asc">
                        Price Low to High
                    </option>

                    <option value="price:desc">
                        Price High to Low
                    </option>

                    <option value="rating:asc">
                        Rating Low to High
                    </option>

                    <option value="rating:desc">
                        Rating High to Low
                    </option>
                </select>

                <button className="rounded bg-[#23A6F0] px-6 py-2 text-white">
                    Filter
                </button>
            </div>
        </div>
    );
}

export default FilterBar;