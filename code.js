// using heaps algorithm to generate permutations of the connections
// https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/

// graph input data structure is adjacency list
function are_isomorphic (graph1, graph2) 
{
    // check if they have same number of nodes
    if (graph1.length != graph2.length)
    {
        return false;
    }

    // check if already matching
    for (var i = 0; i < graph1.length; i++)
    {
        if(checkMatching(graph1[i], graph2, i))
        {
            return true;
        }
    }

    // for each node, generate permutations of connections
    for (var i = 0; i < graph1.length; i++)
    {
        if (heapPermutation(graph1, graph2, graph1[i].length, graph1[i].length, node))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

function heapPermutation (array, graph2, size, n, node)
{
    if (size == 1)
    {
        if (checkMatching(array, graph2, node))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    for (let i = 0; i < size; i++) {
        if(heapPermutation(a, size - 1, n))
        {
            return true;
        }

        if (size % 2 == 1) 
        {
            let temp = a[0];
            a[0] = a[size - 1];
            a[size - 1] = temp;
        }
        else 
        {
            let temp = a[i];
            a[i] = a[size - 1];
            a[size - 1] = temp;
        }
    }
}

function checkMatching (graph1Node, graph2, node)
{
    for (var i = 0; i < graph1Node.length; i++)
    {
        if (graph1Node[i] != graph2[node][i])
        {
            return false
        }
    }

    return true;
}