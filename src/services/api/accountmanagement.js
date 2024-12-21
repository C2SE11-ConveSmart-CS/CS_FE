import customFetch from '../../utils/axios'

export const getListUser = async ({ nameOrAccount, role }) => {
  try {
    const resp = await customFetch.get(
      `/account-management?nameOrAccount=${nameOrAccount}&role=${role}`
    )
    return resp.data
  } catch (err) {
    return null
  }
}

export const blockUser = async listId => {
  try {
    const resp = await customFetch.post(`/account-management/block`, {
      listId,
    })
    return resp.data
  } catch (err) {
    return null
  }
}

export const unblockUser = async listId => {
  try {
    const resp = await customFetch.post(`/account-management/un-block`, {
      listId,
    })
    return resp.data
  } catch (err) {
    return null
  }
}

export const editRole = async (listId, role) => {
  try {
    const resp = await customFetch.post(`/account-management/edit-role`, {
      listId,
      role,
    })
    return resp.data
  } catch (err) {
    return null
  }
}
