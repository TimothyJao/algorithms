class UnionFind{
    constructor(size){
        this.size = size;
        this.sz = new Array(size)
        this.id = new Array(size);
        this.numComponents = size;
        
        for(int i = 0; i < size; i++){
            id[i] = i;
            sz[i] = 1;
        }
    }

    find(p){
        let root = p;
        while(root != id[root]){root = id[root]}

        while(p != root){
            let next = id[p];
            id[p] = root;
            p = next;
        }

        return root;
    }

    connected(p, q){
        return this.find(p) === this.find(q);
    }

    componentSize(p){
        return sz[find(p)]
    }

    components(){
        return numComponents
    }

    unify(p, q){
        let root1 = find(p);
        let root2 = find(q);
        if (root1 == root2){return};

        if(sz[root1] < sz[root2]){
            sz[root2] += sz[root1];
            id[root2] = root1;
        }
        this.numComponents--;
    }

}