import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlumniCard from './AlumniCard';
import api from '../api'; // axios instance

const MemberSection = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [batchOptions, setBatchOptions] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const res = await api.get('/alumni');
        const allAlumni = res.data;

        setAlumniList(allAlumni);
        setFilteredList(allAlumni);

        const batches = [...new Set(allAlumni.map(a => a.batch))].filter(Boolean).sort();
        setBatchOptions(batches);
      } catch (err) {
        console.error('Error fetching alumni:', err);
        setError('Failed to load alumni. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  const applyFiltersAndSort = (list, batch, sort, query) => {
    let filtered = [...list];

    if (batch) {
      filtered = filtered.filter(a => a.batch === batch);
    }

    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(a =>
        (a.fullName || '').toLowerCase().includes(q) ||
        (a.email || '').toLowerCase().includes(q) ||
        (a.company || '').toLowerCase().includes(q)
      );
    }

    if (sort === 'newest') {
      filtered.sort((a, b) => (b.yearOfPassing || 0) - (a.yearOfPassing || 0));
    } else if (sort === 'oldest') {
      filtered.sort((a, b) => (a.yearOfPassing || 0) - (b.yearOfPassing || 0));
    } else if (sort === 'name') {
      filtered.sort((a, b) => (a.fullName || '').localeCompare(b.fullName || ''));
    }

    return filtered;
  };

  const handleBatchChange = (e) => {
    const batch = e.target.value;
    setSelectedBatch(batch);
    const updated = applyFiltersAndSort(alumniList, batch, sortOption, searchQuery);
    setFilteredList(updated);
  };

  const handleSortChange = (e) => {
    const sort = e.target.value;
    setSortOption(sort);
    const updated = applyFiltersAndSort(alumniList, selectedBatch, sort, searchQuery);
    setFilteredList(updated);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const updated = applyFiltersAndSort(alumniList, selectedBatch, sortOption, query);
    setFilteredList(updated);
  };

  const handleViewProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🎓 Meet Our Alumni</h2>

      <div style={styles.controlsContainer}>
        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search by name, email, or company..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={styles.searchInput}
        />

        {/* 🏷️ Batch Filter */}
        <div>
          <label style={styles.label}>Filter by Batch: </label>
          <select value={selectedBatch} onChange={handleBatchChange} style={styles.select}>
            <option value="">All</option>
            {batchOptions.map((batch, index) => (
              <option key={index} value={batch}>{batch}</option>
            ))}
          </select>
        </div>

        {/* 🔃 Sort Options */}
        <div>
          <label style={styles.label}>Sort by: </label>
          <select value={sortOption} onChange={handleSortChange} style={styles.select}>
            <option value="">Default</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Name (A–Z)</option>
          </select>
        </div>
      </div>

      {loading && <p style={styles.status}>🔄 Loading alumni...</p>}
      {error && <p style={{ ...styles.status, color: 'red' }}>{error}</p>}

      {!loading && !error && (
        filteredList.length > 0 ? (
          <div style={styles.grid}>
            {filteredList.map((alumni, index) => (
              <AlumniCard key={index} alumni={alumni} onView={() => handleViewProfile(alumni._id)} />
            ))}
          </div>
        ) : (
          <p style={styles.status}>No alumni found.</p>
        )
      )}
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 30px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    minHeight: '80vh',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#004080',
  },
  status: {
    fontSize: '1.2rem',
    color: '#777',
    marginTop: '20px',
  },
  controlsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '30px',
  },
  label: {
    fontSize: '1.1rem',
    marginRight: '10px',
  },
  select: {
    padding: '8px 12px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  searchInput: {
    padding: '8px 14px',
    fontSize: '1rem',
    width: '280px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
};

export default MemberSection;
