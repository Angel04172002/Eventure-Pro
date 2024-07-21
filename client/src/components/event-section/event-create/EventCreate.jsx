import 'bootstrap/dist/css/bootstrap.css';


export default function EventCreate() {

    return (

        <div className="form-container text-center">
            <form method="post" className="edit-form">
     
                <div className="row mb-3">
                    <div className="col-sm-10 form-group topic-div">
                        <label className="topic-label" htmlFor="exampleFormControlInput1">
                            Име
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 form-group message-div">
                        <label className="comment-label" htmlFor="description">
                            Описание
                        </label>
                        <textarea
                            name="description"
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 form-group text-div">
                        <label className="text-label">Изображение</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="col-10">
                    <input
                        id="submit-btn"
                        type="submit"
                        className="w-100 btn btn-primary"
                        defaultValue="Запази"
                    />
                </div>
            </form>
        </div>

    )
}