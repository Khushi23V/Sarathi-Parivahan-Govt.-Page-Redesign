import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const ApplicationFormContext = createContext(null);

const STORAGE_PREFIX = 'sarathi_application_';

function getStorageKey(flowType) {
  return `${STORAGE_PREFIX}${flowType}`;
}

function loadFromStorage(flowType) {
  try {
    const raw = localStorage.getItem(getStorageKey(flowType));
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error('Failed to load saved application progress:', err);
    return {};
  }
}

function saveToStorage(flowType, data) {
  try {
    localStorage.setItem(getStorageKey(flowType), JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save application progress:', err);
  }
}

/**
 * Wraps a single application flow (e.g. "driving-license", "vehicle-registration").
 * Provides form data + step tracking, persisted to localStorage under a key
 * scoped to that flow, so switching between flows doesn't mix up data.
 */
export function ApplicationFormProvider({ flowType, children }) {
  const [formData, setFormData] = useState(() => loadFromStorage(flowType));

  // Re-load if the flow type changes (e.g. navigating from one application to another)
  useEffect(() => {
    setFormData(loadFromStorage(flowType));
  }, [flowType]);

  useEffect(() => {
    saveToStorage(flowType, formData);
  }, [flowType, formData]);

  const updateFields = useCallback((fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({});
    try {
      localStorage.removeItem(getStorageKey(flowType));
    } catch (err) {
      console.error('Failed to clear saved application progress:', err);
    }
  }, [flowType]);

  return (
    <ApplicationFormContext.Provider value={{ flowType, formData, updateFields, resetForm }}>
      {children}
    </ApplicationFormContext.Provider>
  );
}

export function useApplicationForm() {
  const ctx = useContext(ApplicationFormContext);
  if (!ctx) {
    throw new Error('useApplicationForm must be used within an ApplicationFormProvider');
  }
  return ctx;
}
