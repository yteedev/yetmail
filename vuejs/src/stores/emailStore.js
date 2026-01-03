import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEmailStore = defineStore('email', () => {
  const emails = ref([])
  const emailSearch = ref('')

  // FETCH EMAILS
  const fetchEmails = async () => {
    const res = await fetch('http://localhost:3000/messages')
    emails.value = await res.json()
  }

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

  return { emails, emailSearch, fetchEmails }
})
