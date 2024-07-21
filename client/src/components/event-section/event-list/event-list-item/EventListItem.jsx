import 'bootstrap/dist/css/bootstrap.css';

export default function EventListItem({
    title,
    description,
    imageUrl
}) {

    return (
        <>

            <div className="col">
                <div className="card h-100">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Created On</p>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "2em",
                                marginBottom: "1em"
                            }}
                            className="changeButtons"
                        >
                            <a
                                style={{ padding: "0.9em", display: "block" }}
                                className="edit-btn"
                            >
                                {" "}
                                Редактирай
                            </a>
                            <a
                                style={{ padding: "0.9em", display: "block" }}
                                className="delete-btn"
                            >
                                Изтрий
                            </a>
                        </div>
                        <a
                            id="open-submit"
                            type="submit"
                            className="w-100 btn open-btn btn-primary"
                        >
                            Отвори
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}