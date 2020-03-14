import React from 'react'
import { ListGroup } from 'react-bootstrap';
import TextHighlight from 'react-text-highlight';

export default function ListPage({ repoData, err, filterData, filter }) {
    return (
        <div className='listPage'>
            {filterData.length === 0 ?
                <ListGroup>
                    {err == '' ? repoData.map((repo, id) =>
                        <ListGroup.Item key={id}>{repo.name}</ListGroup.Item>
                    ) : <ListGroup.Item>{err}</ListGroup.Item>
                    }
                </ListGroup>
                :
                <ListGroup>
                    {true ? filterData.map((repo, id) =>
                        <ListGroup.Item key={id}>
                            <TextHighlight
                                highlight={filter}
                                text={repo.name}
                            />
                        </ListGroup.Item>
                    ) : <ListGroup.Item>{err}</ListGroup.Item>
                    }
                </ListGroup>
            }

        </div>
    )
}