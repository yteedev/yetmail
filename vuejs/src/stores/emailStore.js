import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEmailStore = defineStore('email', () => {
  const emails = ref([])
  const selectedEmails = ref([])
  // const emailSearch = ref('')

  // ALL EMAILS SELECTED CHECKER
  const allSelected = computed(() => {
    return emails.value.length > 0 && selectedEmails.value.length === emails.value.length
  })

  // SOME EMAILS SELECTED CHECKER
  const someSelected = computed(() => {
    return selectedEmails.value.length > 0 && selectedEmails.value.length < emails.value.length
  })

  const labels = ref([
    // Main labels
    { id: 'inbox', name: 'Inbox', icon: '/icons/icons8-inbox-96.png', count: 4740 },
    { id: 'starred', name: 'Starred', icon: '/icons/icons8-star-96.png', count: 0 },
    { id: 'snoozed', name: 'Snoozed', icon: '/icons/icons8-clock-96.png', count: 0 },
    { id: 'sent', name: 'Sent', icon: '/icons/icons8-sent-96.png', count: 0 },
    { id: 'drafts', name: 'Drafts', icon: '/icons/icons8-draft-96.png', count: 1 },
    { id: 'purchases', name: 'Purchases', icon: '/icons/icons8-shopping-bag-96.png', count: 101 },
  ])

  // FETCH EMAILS
  const fetchEmails = async () => {
    const res = await fetch('http://localhost:3000/messages')
    const data = await res.json()
    emails.value = data
  }

  // SELECT ALL EMAILS
  const toggleAllEmail = (emailId) => {
    if (allSelected.value || someSelected.value) {
      selectedEmails.value = []
    } else {
      selectedEmails.value = emails.value.map((email) => email.id)
    }
  }

  // SELECT ONE EMAIL
  const toggleEmailSelection = (emailId) => {
    const index = selectedEmails.value.indexOf(emailId)
    if (index > -1) {
      selectedEmails.value.splice(index, 1)
    } else {
      selectedEmails.value.push(emailId)
    }
  }

  // CHECK IF EMAIL IS SELECTED
  const isEmailSelected = (emailId) => {
    return selectedEmails.value.includes(emailId)
  }

  // REFRESH EMAILS
  const refreshEmails = async () => {
    selectedEmails.value = []
    await fetchEmails()
  }

  return {
    emails,
    selectedEmails,
    allSelected,
    someSelected,
    labels,
    fetchEmails,
    toggleAllEmail,
    toggleEmailSelection,
    isEmailSelected,
    refreshEmails,
  }
})

// FILTERED EMAILS BASED ON SEARCH
// const filteredEmails = computed(() => {
//   if (!emailSearch.value) {
//     return emails.value
//   }
//   return emails.value.filter(
//     (email) =>
//       email.sender.toLowerCase().includes(emailSearch.value.toLowerCase()) ||
//       email.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
//       email.message_sneak.toLowerCase().includes(searchQuery.value.toLowerCase())
//   )
// })
