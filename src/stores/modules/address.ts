import { getMemberAddressAPI } from '@/services/address'
import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()
  const allAddress = ref<AddressItem[]>([])

  const changeSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }

  const getAllAddress = async () => {
    const res = await getMemberAddressAPI()
    allAddress.value = res.result
  }

  return {
    selectedAddress,
    allAddress,
    changeSelectedAddress,
    getAllAddress,
  }
})
