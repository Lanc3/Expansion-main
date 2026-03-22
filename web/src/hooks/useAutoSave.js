import { useState, useEffect, useCallback } from 'react'

const useAutoSave = (key, interval = 30000) => {
  const [hasDraft, setHasDraft] = useState(false)
  const [draftTimestamp, setDraftTimestamp] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem(`autosave_${key}`)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setHasDraft(true)
        setDraftTimestamp(parsed.timestamp)
      } catch (e) {
        localStorage.removeItem(`autosave_${key}`)
      }
    }
  }, [key])

  const saveDraft = useCallback(
    (data) => {
      localStorage.setItem(
        `autosave_${key}`,
        JSON.stringify({
          data,
          timestamp: Date.now(),
        })
      )
      setHasDraft(true)
      setDraftTimestamp(Date.now())
    },
    [key]
  )

  const loadDraft = useCallback(() => {
    const saved = localStorage.getItem(`autosave_${key}`)
    if (saved) {
      try {
        return JSON.parse(saved).data
      } catch (e) {
        return null
      }
    }
    return null
  }, [key])

  const clearDraft = useCallback(() => {
    localStorage.removeItem(`autosave_${key}`)
    setHasDraft(false)
    setDraftTimestamp(null)
  }, [key])

  return { hasDraft, draftTimestamp, saveDraft, loadDraft, clearDraft }
}

export default useAutoSave
