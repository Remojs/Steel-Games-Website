import './pagination.css'

const Pagination = ({goToNextPage, goToPreviousPage, totalPages, currentPage}) => {
  return (
    <div className="pagination">
        <button className="prev-btn" onClick={goToPreviousPage} disabled={currentPage === 1}> Anterior </button>
            <span className="current-btn">{currentPage}</span>
        <button className="next-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>Siguiente </button>
    </div>
  )
}

export default Pagination