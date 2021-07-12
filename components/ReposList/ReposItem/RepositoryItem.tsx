import React from 'react'

interface RepositoryItemPropsInterface {
  repoName: string,
  updatedAt: string,
  starsCount: number,
  createdAt: string,
  size: number
  repoID: string,
  repoOwner: string
}

const RepositoryItem: React.FC<RepositoryItemPropsInterface> = ({ repoName, updatedAt, starsCount, createdAt, size }) => {

  return (
    <tr>
      <td>{repoName}</td>
      <td>{createdAt}</td>
      <td>{updatedAt}</td>
      <td>{starsCount}</td>
      <td>{size} kb</td>
    </tr>
  )
}

export default RepositoryItem
