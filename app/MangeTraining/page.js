"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./ManageTraining.css";

export default function AddWorkout() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // 🔹 جلب كل الـ workouts
  const fetchWorkouts = async () => {
    const res = await fetch("/api/workouts");
    const data = await res.json();
    console.log(data)
    setWorkouts(data.workouts || []);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  // 🔹 إنشاء أو تحديث تمرين
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (file) formData.append("video", file);

    let url = "/api/workouts";
    let method = "POST";

    if (editingId) {
      url = `/api/workouts/${editingId}`;
      method = "PUT";
    }

    const res = await fetch(url, {
      method,
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: data.message,
      });
      setName("");
      setDescription("");
      setFile(null);
      setEditingId(null);
      fetchWorkouts();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: data.message,
      });
    }
  };

  // 🔹 حذف تمرين
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    const res = await fetch(`/api/workouts/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (res.ok) {
      Swal.fire("Deleted!", data.message, "success");
      fetchWorkouts();
    } else {
      Swal.fire("Error!", data.message, "error");
    }
  };

  // 🔹 تعبئة البيانات للتعديل
  const handleEdit = (w) => {
    setName(w.name);
    setDescription(w.description);
    setEditingId(w._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <div className="trainingMange">
        <h2 style={{ fontWeight: "bold", textAlign: "center", padding: "20px" }}>
        Welcome to Exercises Management Page
      </h2>

      {/* 🔹 فورم إنشاء / تعديل التمرين */}
      <form onSubmit={handleSubmit} className="workout-form">
        <h2 style={{ fontWeight: "bold", textAlign: "center", padding: "0" }}>
          {editingId ? "Update Exercise" : "Create Exercise"}
        </h2>
        <input
          type="text"
          placeholder="Workout Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">{editingId ? "Update" : "Add"} Exercise</button>
      </form>

      {/* 🔹 جدول عرض كل التمارين */}
      <div className="workout-table-container">
        <h2 style={{ textAlign: "center", margin: "20px 0",fontWeight:"bold" }}>All Exercises</h2>

        <table
          style={{ textAlign: "center" }}
          className="table table-striped table-bordered table-hover align-middle"
        >
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Workout Name</th>
              <th>Description</th>
              <th>Created At</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {workouts.length > 0 ? (
              workouts.map((w, i) => (
                <tr key={w._id}>
                  <td>{i + 1}</td>
                  <td>{w.name}</td>
                  <td>{w.description}</td>
                  <td>{new Date(w.createdAt).toLocaleDateString()}</td>
                  <td
                    className="text-center"
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <a
                    href={w.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success"
                  >
                    ▶ Show
                  </a>
                    <button
                      onClick={() => handleEdit(w)}
                      className="btn btn-sm btn-warning"
                    >
                      ✏ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(w._id)}
                      className="btn btn-sm btn-danger"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No exercises found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>   
    </>
  );
}
